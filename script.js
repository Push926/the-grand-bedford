document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector(".site-footer p");

  if (footer) {
    footer.textContent = `© ${year} The Grand Bedford. All rights reserved.`;
  }

  const galleryImages = Array.from(
    document.querySelectorAll(".gallery-card img"),
  );
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox-image");
  const lightboxCaption = document.querySelector(".lightbox-caption");
  const lightboxClose = document.querySelector(".lightbox-close");
  const lightboxBackdrop = document.querySelector(".lightbox-backdrop");
  const lightboxPrev = document.querySelector(".lightbox-nav.prev");
  const lightboxNext = document.querySelector(".lightbox-nav.next");

  if (galleryImages.length && lightbox && lightboxImage && lightboxCaption) {
    let currentIndex = 0;

    const showImage = (index) => {
      currentIndex = (index + galleryImages.length) % galleryImages.length;
      const img = galleryImages[currentIndex];
      lightboxImage.src = img.src.replace("w=600", "w=1400");
      lightboxImage.alt = img.alt;
      lightboxCaption.textContent =
        img.closest("figure")?.textContent?.trim() || "";
    };

    const openLightbox = (index) => {
      showImage(index);
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    };

    const closeLightbox = () => {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
    };

    const showNext = () => showImage(currentIndex + 1);
    const showPrev = () => showImage(currentIndex - 1);

    galleryImages.forEach((img, index) => {
      img.addEventListener("click", () => openLightbox(index));
    });

    lightboxClose?.addEventListener("click", closeLightbox);
    lightboxBackdrop?.addEventListener("click", closeLightbox);
    lightboxPrev?.addEventListener("click", showPrev);
    lightboxNext?.addEventListener("click", showNext);

    document.addEventListener("keydown", (event) => {
      if (!lightbox.classList.contains("open")) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
    });
  }

  const calendarRoot = document.querySelector("#calendar-months");
  const preferredDatesInput = document.querySelector("#preferred-dates");
  const calendarPrev = document.querySelector("#calendar-prev");
  const calendarNext = document.querySelector("#calendar-next");
  const calendarRangeLabel = document.querySelector("#calendar-range");

  if (calendarRoot && preferredDatesInput) {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const formatDate = (date) =>
      date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

    const toKey = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const renderMonth = (date) => {
      const year = date.getFullYear();
      const monthIndex = date.getMonth();
      const monthName = date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
      const firstDay = new Date(year, monthIndex, 1);
      const lastDay = new Date(year, monthIndex + 1, 0);
      const monthEl = document.createElement("div");
      monthEl.className = "calendar-month";

      const header = document.createElement("div");
      header.className = "calendar-header";
      header.textContent = monthName;

      const grid = document.createElement("div");
      grid.className = "calendar-grid";

      weekdays.forEach((day) => {
        const dow = document.createElement("div");
        dow.className = "dow";
        dow.textContent = day;
        grid.appendChild(dow);
      });

      for (let i = 0; i < firstDay.getDay(); i += 1) {
        const blank = document.createElement("span");
        blank.className = "blank";
        grid.appendChild(blank);
      }

      for (let day = 1; day <= lastDay.getDate(); day += 1) {
        const dateObj = new Date(year, monthIndex, day);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "day";
        button.textContent = String(day);
        button.dataset.date = toKey(dateObj);
        button.setAttribute("aria-pressed", "false");
        grid.appendChild(button);
      }

      monthEl.appendChild(header);
      monthEl.appendChild(grid);
      return monthEl;
    };

    const today = new Date();
    let monthOffset = 0;

    let startDate = null;
    let endDate = null;

    const updateRangeLabel = (firstMonthDate, secondMonthDate) => {
      if (!calendarRangeLabel) return;
      const firstLabel = firstMonthDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
      const secondLabel = secondMonthDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
      calendarRangeLabel.textContent = `${firstLabel} — ${secondLabel}`;
    };

    const renderCalendar = () => {
      calendarRoot.innerHTML = "";
      const firstMonth = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
      const secondMonth = new Date(today.getFullYear(), today.getMonth() + monthOffset + 1, 1);
      calendarRoot.appendChild(renderMonth(firstMonth));
      calendarRoot.appendChild(renderMonth(secondMonth));
      updateRangeLabel(firstMonth, secondMonth);
      const dayButtons = Array.from(calendarRoot.querySelectorAll(".day"));
      dayButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const clickedDate = new Date(button.dataset.date);
          if (!startDate || (startDate && endDate)) {
            startDate = clickedDate;
            endDate = null;
          } else {
            endDate = clickedDate;
            if (endDate.getTime() < startDate.getTime()) {
              [startDate, endDate] = [endDate, startDate];
            }
          }
          updateButtons();
          updateInputValue();
        });
      });
      updateButtons();
    };

    const updateInputValue = () => {
      if (!startDate) {
        preferredDatesInput.value = "";
        return;
      }
      if (!endDate) {
        preferredDatesInput.value = formatDate(startDate);
        return;
      }
      preferredDatesInput.value = `${formatDate(startDate)} – ${formatDate(
        endDate,
      )}`;
    };

    const updateButtons = () => {
      const dayButtons = Array.from(calendarRoot.querySelectorAll(".day"));
      dayButtons.forEach((button) => {
        const buttonDate = new Date(button.dataset.date);
        button.classList.remove("range-start", "range-end", "in-range");
        button.setAttribute("aria-pressed", "false");

        if (!startDate) return;
        if (!endDate) {
          if (buttonDate.getTime() === startDate.getTime()) {
            button.classList.add("range-start");
            button.setAttribute("aria-pressed", "true");
          }
          return;
        }

        if (buttonDate.getTime() === startDate.getTime()) {
          button.classList.add("range-start");
          button.setAttribute("aria-pressed", "true");
        } else if (buttonDate.getTime() === endDate.getTime()) {
          button.classList.add("range-end");
          button.setAttribute("aria-pressed", "true");
        } else if (
          buttonDate.getTime() > startDate.getTime() &&
          buttonDate.getTime() < endDate.getTime()
        ) {
          button.classList.add("in-range");
        }
      });
    };

    calendarPrev?.addEventListener("click", () => {
      monthOffset -= 1;
      renderCalendar();
    });

    calendarNext?.addEventListener("click", () => {
      monthOffset += 1;
      renderCalendar();
    });

    renderCalendar();
  }
});

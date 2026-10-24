'use strict';

(function () {
  const config = window.LANDING_CONFIG || {};

  const q = (selector, parent = document) => parent.querySelector(selector);
  const qa = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

  const get = (path, fallback = '') => {
    return path.split('.').reduce((value, key) => {
      if (value && Object.prototype.hasOwnProperty.call(value, key)) return value[key];
      return undefined;
    }, config) ?? fallback;
  };

  const cleanText = (value) => String(value ?? '');

  const create = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = cleanText(text);
    return element;
  };

  const whatsappUrl = (message) => {
    const number = cleanText(get('site.whatsappNumber')).replace(/\D/g, '');
    return `https://wa.me/${number}?text=${encodeURIComponent(message || get('site.whatsappMessage'))}`;
  };

  const fillText = () => {
    document.title = get('site.title', document.title);
    qa('[data-text]').forEach((element) => {
      element.textContent = get(element.dataset.text, element.textContent);
    });
    const year = q('[data-year]');
    if (year) year.textContent = new Date().getFullYear();
  };

  const fillImages = () => {
    const logo = get('brand.logo', 'assets/img/logo.png');
    qa('[data-brand-logo], [data-brand-logo-footer], [data-hero-logo]').forEach((img) => {
      img.src = logo;
      img.alt = `${get('brand.name', 'Brand')} logo`;
    });
    const storyImage = q('[data-story-image]');
    if (storyImage) {
      storyImage.src = get('story.image', 'assets/img/sampel.png');
      storyImage.alt = get('story.title', 'Brand story image');
    }
  };

  const renderNavigation = () => {
    const nav = q('[data-site-nav]');
    if (!nav) return;

    const ul = create('ul');
    get('navigation', []).forEach((item) => {
      const li = create('li');
      const a = create('a', '', item.label);
      a.href = item.target;
      li.appendChild(a);
      ul.appendChild(li);
    });
    nav.appendChild(ul);

    const footerNav = q('[data-footer-nav]');
    if (footerNav) {
      get('footerNavigation', []).forEach((item) => {
        const a = create('a', '', item.label);
        a.href = item.target;
        footerNav.appendChild(a);
      });
    }
  };

  const renderMission = () => {
    const list = q('[data-mission-list]');
    if (!list) return;
    get('mission.items', []).forEach((item) => list.appendChild(create('li', '', item)));
  };

  const renderAbout = () => {
    const container = q('[data-about-paragraphs]');
    if (!container) return;
    get('about.paragraphs', []).forEach((paragraph) => container.appendChild(create('p', '', paragraph)));
  };

  const renderBenefits = () => {
    const container = q('[data-benefits]');
    if (!container) return;
    get('benefits.items', []).forEach((item) => {
      const card = create('article', 'benefit-item');
      card.appendChild(create('div', 'benefit-icon', item.icon));
      card.appendChild(create('h3', '', item.title));
      card.appendChild(create('p', '', item.description));
      container.appendChild(card);
    });
  };

  const renderProducts = () => {
    const tabs = q('[data-product-tabs]');
    const grid = q('[data-product-grid]');
    if (!tabs || !grid) return;

    const products = get('products.items', []);
    const categories = [get('products.allLabel', 'Semua'), ...get('products.categories', [])];

    const renderCards = (category) => {
      grid.innerHTML = '';
      products
        .filter((product) => category === get('products.allLabel', 'Semua') || product.category === category)
        .forEach((product) => {
          const card = create('article', 'prod-card');
          const imageBox = create('div', 'prod-image');
          const img = create('img', 'prod-photo');
          img.src = product.image || 'assets/img/sampel.png';
          img.alt = product.name;
          imageBox.appendChild(img);

          const body = create('div', 'prod-body');
          body.appendChild(create('span', 'pill', product.category));
          body.appendChild(create('h3', '', product.name));
          body.appendChild(create('p', 'prod-price-old', product.oldPrice));
          body.appendChild(create('p', 'prod-price', product.price));
          const button = create('button', 'btn-buy', 'Beli Sekarang');
          button.type = 'button';
          button.addEventListener('click', () => {
            window.open(whatsappUrl(`Halo Admin Cawine, saya tertarik dengan produk ${product.name}. Apa stok dan detailnya tersedia?`), '_blank', 'noopener');
          });
          body.appendChild(button);
          card.append(imageBox, body);
          grid.appendChild(card);
        });
    };

    categories.forEach((category, index) => {
      const button = create('button', 'tab-btn', category);
      button.type = 'button';
      button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
      button.addEventListener('click', () => {
        qa('.tab-btn', tabs).forEach((btn) => btn.setAttribute('aria-selected', 'false'));
        button.setAttribute('aria-selected', 'true');
        renderCards(category);
      });
      tabs.appendChild(button);
    });

    const more = q('[data-products-more]');
    if (more) {
      more.textContent = get('products.moreLabel', 'Pesan via WhatsApp');
      more.href = whatsappUrl(get('site.whatsappMessage'));
      more.target = '_blank';
      more.rel = 'noopener noreferrer';
    }

    renderCards(categories[0]);
  };

  const renderStoryTags = () => {
    const container = q('[data-story-tags]');
    if (!container) return;
    get('story.tags', []).forEach((tag) => container.appendChild(create('span', 'pill', tag)));
  };

  const renderProcess = () => {
    const container = q('[data-process]');
    if (!container) return;
    get('process.items', []).forEach((item, index) => {
      const card = create('article', 'timeline-card');
      card.appendChild(create('span', 'timeline-number', String(index + 1).padStart(2, '0')));
      card.appendChild(create('h3', '', item.title));
      card.appendChild(create('p', '', item.description));
      container.appendChild(card);
    });
  };

  const renderEvents = () => {
    const container = q('[data-events]');
    if (!container) return;
    get('events.items', []).forEach((item, index) => {
      const card = create('article', 'event-card');
      const img = create('img');
      img.src = item.image || 'assets/img/sampel.png';
      img.alt = item.title;
      card.appendChild(img);
      card.appendChild(create('span', 'event-number', String(index + 1).padStart(2, '0')));
      card.appendChild(create('h3', '', item.title));
      card.appendChild(create('p', 'event-date', item.date));
      card.appendChild(create('p', '', item.description));
      container.appendChild(card);
    });
  };

  const renderGallery = () => {
    const container = q('[data-gallery]');
    if (!container) return;
    get('gallery.items', []).forEach((item) => {
      const card = create('article', 'gallery-item');
      card.tabIndex = 0;
      const img = create('img');
      img.src = item.image || 'assets/img/sampel.png';
      img.alt = item.title;
      card.appendChild(img);
      card.appendChild(create('span', 'gallery-tag', item.tag));
      card.appendChild(create('h3', '', item.title));
      card.appendChild(create('p', '', item.description));
      container.appendChild(card);
    });
  };

  const renderTestimonials = () => {
    const container = q('[data-testimonials]');
    if (!container) return;
    get('testimonials.items', []).forEach((item) => {
      const card = create('article', 'testimonial-card');
      card.appendChild(create('blockquote', '', `“${item.quote}”`));
      const profile = create('div', 'testimonial-profile');
      profile.appendChild(create('span', 'testimonial-avatar', item.initials));
      const copy = create('div');
      copy.appendChild(create('strong', '', item.name));
      copy.appendChild(create('p', 'testimonial-role', item.role));
      profile.appendChild(copy);
      card.appendChild(profile);
      container.appendChild(card);
    });
  };

  const renderLocation = () => {
    const map = q('[data-map-iframe]');
    if (map) map.src = get('site.mapEmbedUrl');
    const link = q('[data-map-link]');
    if (link) link.href = get('site.mapUrl');

    const status = q('[data-open-status]');
    const detail = q('[data-open-detail]');
    if (!status || !detail) return;

    status.textContent = get('business.openText', 'Jam buka');
    detail.textContent = get('business.openUntilText', 'Silakan hubungi admin.');
  };

  const renderFaq = () => {
    const container = q('[data-faq]');
    if (!container) return;
    get('faq.items', []).forEach((item, index) => {
      const faq = create('article', 'faq-item');
      if (index === 0) faq.classList.add('is-open');
      const question = create('button', 'faq-question');
      question.type = 'button';
      question.innerHTML = `<span>${cleanText(item.question)}</span><span>+</span>`;
      const answer = create('div', 'faq-answer', item.answer);
      question.addEventListener('click', () => faq.classList.toggle('is-open'));
      faq.append(question, answer);
      container.appendChild(faq);
    });
  };

  const renderContact = () => {
    const topics = q('[data-contact-topics]');
    if (topics) {
      get('contact.topics', []).forEach((topic) => {
        const option = create('option', '', topic);
        option.value = topic;
        topics.appendChild(option);
      });
    }

    const direct = q('[data-direct-links]');
    if (direct) {
      get('contact.directLinks', []).forEach((item) => {
        const a = create('a', 'contact-pill', item.label);
        a.href = getDirectUrl(item.type);
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        direct.appendChild(a);
      });
    }

    const footerContact = q('[data-footer-contact]');
    if (footerContact) {
      get('contact.directLinks', []).forEach((item) => {
        const a = create('a', '', item.label);
        a.href = getDirectUrl(item.type);
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        footerContact.appendChild(a);
      });
    }

    const form = q('[data-contact-form]');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const message = [
          `Halo Admin Cawine, saya ${formData.get('name')}.`,
          `Keperluan: ${formData.get('topic')}.`,
          `Pesan: ${formData.get('message')}`
        ].join('\n');
        window.open(whatsappUrl(message), '_blank', 'noopener');
      });
    }
  };

  const getDirectUrl = (type) => {
    if (type === 'instagram') return get('site.instagramUrl', '#');
    if (type === 'tiktok') return get('site.tiktokUrl', '#');
    if (type === 'whatsapp') return whatsappUrl(get('site.whatsappMessage'));
    if (type === 'map') return get('site.mapUrl', '#');
    return '#';
  };

  const bindNavigation = () => {
    const toggle = q('[data-nav-toggle]');
    const nav = q('[data-site-nav]');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isOpen));
        nav.classList.toggle('is-open', !isOpen);
        document.body.classList.toggle('nav-open', !isOpen);
      });

      qa('a', nav).forEach((link) => {
        link.addEventListener('click', () => {
          toggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('is-open');
          document.body.classList.remove('nav-open');
        });
      });
    }

    const sections = qa('main section[id]');
    const links = qa('.site-nav a');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { threshold: 0.35 });
    sections.forEach((section) => observer.observe(section));
  };

  const revealOnScroll = () => {
    const items = qa('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  };

  const init = () => {
    fillText();
    fillImages();
    renderNavigation();
    renderMission();
    renderAbout();
    renderBenefits();
    renderProducts();
    renderStoryTags();
    renderProcess();
    renderEvents();
    renderGallery();
    renderTestimonials();
    renderLocation();
    renderFaq();
    renderContact();
    bindNavigation();
    revealOnScroll();
  };

  document.addEventListener('DOMContentLoaded', init);
})();

const app = new Vue({
  data() {
    return {
      url: '',
      slug: '',
      message: '',
      link: '',
    };
  },
  methods: {
    async createUrl() {
      const response = await fetch('/url/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          url: this.url,
          slug: this.slug,
        }),
      });
      const result = await response.json();
      this.displayData(result);
    },
    displayData(data) {
      const {
        message = '',
        body = {},
      } = data;

      this.message = message || '';
      this.link = body.slug
        ? `${window.location.href}url/${body.slug}`
        : '';
    },
  },
});

app.$mount('#app');

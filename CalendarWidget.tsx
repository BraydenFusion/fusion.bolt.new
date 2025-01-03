import React, { useEffect } from 'react';

declare global {
  interface Window {
    Cal?: any;
  }
}

export const CalendarWidget = () => {
  useEffect(() => {
    // Initialize Cal.com
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ['initNamespace', namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    // Initialize booking namespace
    window.Cal?.('init', 'booking', { origin: 'https://cal.com' });

    // Configure inline calendar
    window.Cal?.ns.booking('inline', {
      elementOrSelector: '#my-cal-inline',
      config: { layout: 'month_view', theme: 'dark' },
      calLink: 'fusion-ai/booking',
    });

    // Configure UI theme
    window.Cal?.ns.booking('ui', {
      theme: 'dark',
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  }, []);

  return (
    <div
      id="my-cal-inline"
      className="w-full h-[420px] overflow-auto bg-black/20 backdrop-blur-lg rounded-lg border border-white/10"
    />
  );
};
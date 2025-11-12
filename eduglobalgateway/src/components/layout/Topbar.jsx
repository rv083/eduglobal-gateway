// src/components/layout/Topbar.jsx
export default function Topbar() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600/95 to-transparent text-white text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <span className="font-medium">📞 +91 98765 43210</span>
          <span className="text-xs opacity-90">|</span>
          <a href="mailto:hello@eduglobalgateway.com" className="underline text-sm">hello@eduglobalgateway.com</a>
        </div>
        <div className="text-xs text-white/90">Open: Mon - Sat · 10:00 AM - 6:00 PM</div>
      </div>
    </div>
  );
}

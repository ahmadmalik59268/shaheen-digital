export default function Legal({ title }: { title: string }) {
  return (
    <div className="w-full min-h-[70vh] py-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-text mb-8">{title}</h1>
        <div className="prose prose-invert prose-slate max-w-none text-slate-400">
          <p>Last updated: October 2026</p>
          <p>This is a demo {title.toLowerCase()} page for Shaheen Digital Marketing. In a real application, this would contain the full legal text prepared by counsel.</p>
          <h2>1. Introduction</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h2>2. Data Collection</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-section-glow relative z-10 px-16 py-25">
      <div className="container">
        <h2>Let&rsquo;s build something that moves the numbers</h2>
        <p className="text-neutral-400">
          Senior full-stack or frontend-leaning roles - startups or enterprise.
          I usually reply within a day.
        </p>
        <ul>
          <li>
            <p>Start a conversation</p>
          </li>
          <li>
            <a href="mailto:david@davidmcdougal.com">david@davidmcdougal.com</a>
          </li>
          <li>
            <p>LinkedIn</p>
          </li>
          <li>
            <p>GitHub</p>
          </li>
        </ul>
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} David McDougal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

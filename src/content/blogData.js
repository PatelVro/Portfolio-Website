export const blogPosts = [
  {
    id: 1,
    title: "Automating Kijiji Ad Reposting with Python and Selenium",
    date: "2025-06-12",
    summary:
      "How a repetitive daily task led me to build a full-blown automation bot that saves hours every week.",
    content: `
      <strong>🧠 The Problem</strong>
      At my previous job, one of my daily responsibilities was to manually delete and repost around <strong>30 ads on Kijiji</strong>. This process involved logging into the site, navigating through several pages, deleting each old ad, and then reposting it with the exact same details. Doing this every single day took about <strong>30 to 45 minutes</strong>, six days a week — time that felt completely wasted and monotonous.

      The repetitive nature of this task made me think: “Surely, there must be a way to automate this.” But at that time, I had no experience with browser automation, just some small Python and JavaScript scripts for other projects. So, I decided to dive in and see if I could build a solution.
      
      <strong>🔍 The Research</strong><br />
      Starting from zero, I began researching browser automation tools. I quickly discovered <strong>Selenium</strong>, which allows scripts to control a web browser just like a human — clicking buttons, filling forms, and navigating pages.
      
      Learning Selenium was challenging because I had to understand how to identify page elements dynamically, handle delays, and avoid getting blocked by Kijiji’s bot detection. With the help of ChatGPT (v3.5), GitHub repositories, and Stack Overflow threads, I gradually built the foundational knowledge needed to write my own automation scripts.
      
      <strong>🧪 The Breakthrough</strong><br />
      The first few attempts were frustrating — my scripts would break due to changing page structures, timing issues, or unexpected pop-ups. But persistence paid off. I came across a legacy example that showed how Selenium could post a basic ad using JSON data. Although incomplete and outdated, it was exactly the motivation I needed to believe this was possible.
      
      I realized that if I could automate just one step reliably, I could build on top of that and automate the entire reposting process.
      
      <strong>🛠️ The Build</strong><br />
      Here’s how I built the bot step by step:
      <ol>
        <li><strong>Excel Integration:</strong> Initially, I used Excel files to store all the ad data — titles, descriptions, images, prices, and categories. This gave me a structured way to feed data into the bot.</li>
        <li><strong>Automated Login:</strong> The bot can securely log into multiple Kijiji accounts, managing session cookies and credentials safely.</li>
        <li><strong>Ad Deletion & Reposting:</strong> Before posting a new ad, the bot locates and deletes any existing ads to avoid duplicates and keep the listings fresh.</li>
        <li><strong>Category & Location Selection:</strong> The bot intelligently selects the correct category and location for each ad, matching the Excel data.</li>
        <li><strong>Bot Delay & Randomization:</strong> To mimic human behavior and avoid detection, random delays and varied mouse movements were added.</li>
        <li><strong>Retry Logic & Error Handling:</strong> If an action fails due to a site error or temporary block, the bot retries gracefully with exponential backoff.</li>
        <li><strong>Database Migration:</strong> To scale better, I replaced Excel with a MySQL database, making data management more robust and easier to query.</li>
        <li><strong>Frontend Dashboard:</strong> I created a simple web UI to display ad statuses, allow manual edits, schedule reposts, and monitor logs.</li>
        <li><strong>Auto-Execution Script:</strong> On a Windows server, a .bat script runs the bot twice daily, pulling the latest code from GitHub automatically.</li>
      </ol>
      
      <strong>🤖 The Reposter in Action</strong><br />
      Here’s how the final system works:
      <ol>
        <li>The Python + Selenium script fetches ad data from the MySQL database.</li>
        <li>It logs into Kijiji, navigates to the user’s ads page, and deletes old ads one by one.</li>
        <li>It reposts ads with all the updated content, selecting the appropriate category, location, and price.</li>
        <li>The system supports multiple Kijiji accounts and can handle 300+ ads daily without human intervention.</li>
        <li>All tasks are run on a dedicated Windows server, triggered automatically by scheduled batch files that pull updates from GitHub before execution.</li>
      </ol>
      
      <strong>🧵 Lessons Learned</strong>
      <ol>
        <li>Selenium is incredibly powerful but requires patience to handle website layout changes and anti-bot mechanisms.</li>
        <li>Automation projects start small — focus on solving your own problems first.</li>
        <li>It’s okay to borrow or adapt existing code snippets; what matters is understanding and building upon them.</li>
        <li>Proper error handling and retries are essential to keep long-running automation stable.</li>
        <li>Building a simple UI can drastically improve usability, even for personal projects.</li>
      </ol>
      
      <strong>📎 Tech Stack</strong><br />
      Python, Selenium WebDriver, MySQL, and a lightweight HTML/CSS frontend for dashboard management.
      
      <strong>✍️ Next Steps</strong><br />
      I’m planning to migrate the bot to run headless on a Linux server, improve the dashboard with React, and expand automation to other repetitive workflows.
      
      If you’re stuck automating your own repetitive tasks, feel free to reach out. I’d love to help or just geek out over bots together!
    `,
  },
];

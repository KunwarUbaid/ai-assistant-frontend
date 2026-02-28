// // // "use client"

// // // import { useState } from "react";

// // // export default function Home() {
// // //   const [input, setInput] = useState("");
// // //   const [response, setResponse] = useState("");
// // //   const [loading, setLoading] = useState(false);

// // //   const sendMessage = async () => {
// // //     if (!input.trim()) return;

// // //     try {
// // //       setLoading(true);

// // //       const res = await fetch("http://localhost:8000/chat", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify({
// // //           user_input: input,
// // //         }),
// // //       });

// // //       if (!res.ok) {
// // //         throw new Error("Failed to fetch response");
// // //       }

// // //       const data = await res.json();

// // //       // 👇 This was missing
// // //       setResponse(data.reply);

// // //       // Optional: clear input after send
// // //       setInput("");

// // //     } catch (error) {
// // //       console.error("Error:", error);
// // //       setResponse("Something went wrong.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex flex-col items-center justify-center gap-4">
// // //       <h1 className="text-3xl font-bold">AI Assistant</h1>

// // //       <input
// // //         className="border p-2 w-80"
// // //         value={input}
// // //         onChange={(e) => setInput(e.target.value)}
// // //         placeholder="Type something..."
// // //       />

// // //       <button
// // //         onClick={sendMessage}
// // //         className="bg-black text-white px-4 py-2"
// // //         disabled={loading}
// // //       >
// // //         {loading ? "Sending..." : "Send"}
// // //       </button>

// // //       {response && (
// // //         <div className="mt-4 p-4 border w-80">
// // //           {response}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // "use client"

// // import { useState } from "react"

// // export default function Home() {
// //   const [input, setInput] = useState("")
// //   const [chatReply, setChatReply] = useState("")
// //   const [draft, setDraft] = useState<any>(null)
// //   const [loading, setLoading] = useState(false)

// //   const sendMessage = async () => {
// //     setLoading(true)

// //     const res = await fetch("http://localhost:8000/chat", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         user_input: input,
// //       }),
// //     })

// //     const data = await res.json()

// //     if (data.action === "draft_email") {
// //       setDraft(data.data)
// //       setChatReply("")
// //     } else {
// //       setChatReply(data.reply)
// //       setDraft(null)
// //     }

// //     setLoading(false)
// //   }

// //   const confirmSend = async () => {
// //     setLoading(true)

// //     const res = await fetch("http://localhost:8000/send-email", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(draft),
// //     })

// //   const data = await res.json()

// // if (data.message) {
// //   setChatReply(data.message)
// // } else if (data.error) {
// //   setChatReply(data.error)
// // } else {
// //   setChatReply("Unexpected response")
// // }
// //     setDraft(null)
// //     setLoading(false)
// //   }

// //   const paraphraseEmail = async () => {
// //     setLoading(true)

// //     const res = await fetch("http://localhost:8000/paraphrase-email", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({ body: draft.body }),
// //     })

// //     const data = await res.json()

// //     setDraft({ ...draft, body: data.paraphrased })
// //     setLoading(false)
// //   }

// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 p-6">
// //       <h1 className="text-4xl font-bold">AI Assistant</h1>

// //       {/* User Input */}
// //       <div className="flex gap-3">
// //         <input
// //           className="border p-3 w-[500px] rounded"
// //           value={input}
// //           onChange={(e) => setInput(e.target.value)}
// //           placeholder="Type something..."
// //         />

// //         <button
// //           onClick={sendMessage}
// //           className="bg-black text-white px-6 py-3 rounded"
// //         >
// //           {loading ? "Processing..." : "Send"}
// //         </button>
// //       </div>

// //       {/* Normal Chat Reply */}
// //       {chatReply && (
// //         <div className="mt-4 p-4 border w-[500px] bg-white rounded shadow">
// //           {chatReply}
// //         </div>
// //       )}

// //       {/* Email Draft Preview */}
// //       {draft && (
// //         <div className="mt-6 p-6 border w-[500px] bg-white rounded shadow">
          
// //           {/* To */}
// //           <div className="mb-3">
// //             <label className="block font-semibold mb-1">To:</label>
// //             <input
// //               className="border p-2 w-full rounded"
// //               value={draft.to}
// //               placeholder="recipient@example.com"
// //               onChange={(e) =>
// //                 setDraft({ ...draft, to: e.target.value })
// //               }
// //             />
// //           </div>

// //           {/* Subject */}
// //           <div className="mb-3">
// //             <label className="block font-semibold mb-1">Subject:</label>
// //             <input
// //               className="border p-2 w-full rounded"
// //               value={draft.subject}
// //               onChange={(e) =>
// //                 setDraft({ ...draft, subject: e.target.value })
// //               }
// //             />
// //           </div>

// //           <hr className="my-4" />

// //           {/* Body */}
// //           <textarea
// //             className="border p-3 w-full rounded h-48"
// //             value={draft.body}
// //             onChange={(e) =>
// //               setDraft({ ...draft, body: e.target.value })
// //             }
// //           />

// //           {/* Buttons */}
// //           <div className="flex gap-3 mt-5">
// //             <button
// //               onClick={confirmSend}
// //               className="bg-green-600 text-white px-4 py-2 rounded"
// //             >
// //               Send
// //             </button>

// //             <button
// //               onClick={paraphraseEmail}
// //               className="bg-blue-600 text-white px-4 py-2 rounded"
// //             >
// //               Paraphrase More
// //             </button>

// //             <button
// //               onClick={() => setDraft(null)}
// //               className="bg-gray-400 text-white px-4 py-2 rounded"
// //             >
// //               Cancel
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }


// "use client"

// import { useState } from "react"

// export default function Home() {
//   const [input, setInput] = useState("")
//   const [chatReply, setChatReply] = useState<string>("")
//   const [draft, setDraft] = useState<any>(null)
//   const [loading, setLoading] = useState(false)

//   // -------------------------
//   // CHAT
//   // -------------------------
//   const sendMessage = async () => {
//     if (!input.trim()) return

//     try {
//       setLoading(true)

//       const res = await fetch("http://localhost:8000/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user_input: input }),
//       })

//       const data = await res.json()

//       if (data.action === "draft_email") {
//         setDraft(data.data)
//         setChatReply("")
//       } else if (data.reply) {
//         setChatReply(data.reply)
//         setDraft(null)
//       } else if (data.error) {
//         setChatReply(data.error)
//       } else {
//         setChatReply("Unexpected response from server.")
//       }

//       setInput("")
//     } catch (error) {
//       setChatReply("Something went wrong.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   // -------------------------
//   // SEND EMAIL
//   // -------------------------
//   const confirmSend = async () => {
//     try {
//       setLoading(true)

//       const res = await fetch("http://localhost:8000/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(draft),
//       })

//       const data = await res.json()

//       // 🔥 If OAuth required → redirect to Google
//       if (data.authorize && data.auth_url) {
//         window.location.href = data.auth_url
//         return
//       }

//       if (data.message) {
//         setChatReply(data.message)
//       } else if (data.error) {
//         setChatReply(data.error)
//       } else {
//         setChatReply("Unexpected response.")
//       }

//       setDraft(null)
//     } catch (error) {
//       setChatReply("Failed to send email.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   // -------------------------
//   // PARAPHRASE
//   // -------------------------
//   const paraphraseEmail = async () => {
//     try {
//       setLoading(true)

//       const res = await fetch("http://localhost:8000/paraphrase-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ body: draft.body }),
//       })

//       const data = await res.json()

//       if (data.paraphrased) {
//         setDraft({ ...draft, body: data.paraphrased })
//       }
//     } catch {
//       setChatReply("Failed to paraphrase.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   // -------------------------
//   // UI
//   // -------------------------
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      
//       <h1 className="text-4xl font-bold mb-8">AI Assistant</h1>

//       {/* INPUT AREA */}
//       <div className="flex w-full max-w-2xl gap-3">
//         <input
//           className="flex-1 border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask anything or send an email..."
//         />

//         <button
//           onClick={sendMessage}
//           disabled={loading}
//           className="bg-black text-white px-6 py-3 rounded-lg disabled:opacity-50"
//         >
//           {loading ? "Processing..." : "Send"}
//         </button>
//       </div>

//       {/* CHAT RESPONSE */}
//       {chatReply && typeof chatReply === "string" && (
//         <div className="mt-6 w-full max-w-2xl bg-white p-5 rounded-xl shadow">
//           {chatReply}
//         </div>
//       )}

//       {/* EMAIL DRAFT */}
//       {draft && (
//         <div className="mt-8 w-full max-w-2xl bg-white p-6 rounded-xl shadow">

//           <h2 className="text-xl font-semibold mb-4">Email Preview</h2>

//           {/* To */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">To</label>
//             <input
//               className="border p-2 w-full rounded"
//               value={draft.to || ""}
//               onChange={(e) =>
//                 setDraft({ ...draft, to: e.target.value })
//               }
//             />
//           </div>

//           {/* Subject */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">Subject</label>
//             <input
//               className="border p-2 w-full rounded"
//               value={draft.subject || ""}
//               onChange={(e) =>
//                 setDraft({ ...draft, subject: e.target.value })
//               }
//             />
//           </div>

//           {/* Body */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">Body</label>
//             <textarea
//               className="border p-3 w-full rounded h-40"
//               value={draft.body || ""}
//               onChange={(e) =>
//                 setDraft({ ...draft, body: e.target.value })
//               }
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-3">
//             <button
//               onClick={confirmSend}
//               disabled={loading}
//               className="bg-green-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
//             >
//               Send
//             </button>

//             <button
//               onClick={paraphraseEmail}
//               disabled={loading}
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
//             >
//               Paraphrase More
//             </button>

//             <button
//               onClick={() => setDraft(null)}
//               className="bg-gray-400 text-white px-4 py-2 rounded-lg"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

"use client";
import { useEffect, useRef, useState } from "react";

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

type Message =
  | { role: "user"; text: string }
  | { role: "assistant"; text: string }
  | { role: "draft_email"; data: EmailDraft }
  | { role: "draft_meet"; data: MeetDraft }
  | { role: "success"; text: string };

interface EmailDraft { to: string; subject: string; body: string; }
interface MeetDraft { title: string; attendees: string[]; start_time: string; end_time: string; description?: string; }
interface User { email: string; name: string; picture: string; }

function toHistory(messages: Message[]) {
  // Only include plain chat messages in history sent to Claude.
  // Never include draft_email, draft_meet, or success — these confuse Claude
  // into re-triggering the same tool action repeatedly.
  const history: { role: string; content: string }[] = [];
  for (const msg of messages) {
    if (msg.role === "user") history.push({ role: "user", content: msg.text });
    else if (msg.role === "assistant") history.push({ role: "assistant", content: msg.text });
    // Intentionally skip: draft_email, draft_meet, success
  }
  return history;
}

export default function Home() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hi! Please log in with Google to get started." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  // On mount: check URL for logged_in param and fetch users
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const loggedInEmail = params.get("logged_in");

    fetchUsers().then((userList) => {
      if (loggedInEmail) {
        const u = userList.find((u: User) => u.email === loggedInEmail);
        if (u) switchUser(u);
        // Clean URL
        window.history.replaceState({}, "", "/");
      }
    });
  }, []);

  async function fetchUsers(): Promise<User[]> {
    try {
      const res = await fetch(`${BACKEND}/users`);
      const data = await res.json();
      setUsers(data.users || []);
      return data.users || [];
    } catch { return []; }
  }

  function switchUser(user: User) {
    setCurrentUser(user);
    setShowUserMenu(false);
    setMessages([{ role: "assistant", text: `Welcome back, ${user.name}! I can send emails and schedule Google Meet meetings for you. What would you like to do?` }]);
  }

  async function authorizeGmail() {
    const res = await fetch(`${BACKEND}/authorize-gmail`);
    const data = await res.json();
    window.location.href = data.auth_url;
  }

  async function logoutUser(email: string) {
    await fetch(`${BACKEND}/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const updated = await fetchUsers();
    if (currentUser?.email === email) {
      setCurrentUser(null);
      setMessages([{ role: "assistant", text: "You've been logged out. Please log in to continue." }]);
    }
  }

  async function sendMessage() {
    if (!input.trim() || loading) return;
    if (!currentUser) {
      setMessages(prev => [...prev, { role: "assistant", text: "Please log in first by clicking 'Add Account'." }]);
      return;
    }

    const userText = input.trim();
    setInput("");
    const newMessages: Message[] = [...messages, { role: "user", text: userText }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_input: userText, user_email: currentUser.email, history: toHistory(messages) }),
      });
      const data = await res.json();

      if (data.action === "draft_email") {
        // Reset history to just this exchange so past context doesn't bleed into next request
        setMessages([
          { role: "assistant", text: `Got it! Here's the email draft for ${data.data.to}:` },
          { role: "draft_email", data: data.data }
        ]);
      } else if (data.action === "draft_meet") {
        setMessages([
          { role: "assistant", text: `Got it! Here's the meeting draft:` },
          { role: "draft_meet", data: data.data }
        ]);
      } else {
        setMessages([...newMessages, { role: "assistant", text: data.reply }]);
      }
    } catch {
      setMessages([...newMessages, { role: "assistant", text: "Connection error. Is the backend running?" }]);
    } finally {
      setLoading(false);
    }
  }

  async function sendEmail(draft: EmailDraft, msgIndex: number) {
    if (!currentUser) return;
    const res = await fetch(`${BACKEND}/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...draft, user_email: currentUser.email }),
    });
    const data = await res.json();
    const msg: Message = data.error ? { role: "assistant", text: `❌ ${data.error}` } : { role: "success", text: `✅ Email sent to ${draft.to}!` };
    // Reset to single success message so history is clean for next request
    setMessages([msg, { role: "assistant", text: "Done! What else can I help you with?" }]);
  }

  async function scheduleMeet(draft: MeetDraft, msgIndex: number) {
    if (!currentUser) return;
    const res = await fetch(`${BACKEND}/schedule-meet`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...draft, user_email: currentUser.email }),
    });
    const data = await res.json();
    const msg: Message = data.error ? { role: "assistant", text: `❌ ${data.error}` } : { role: "success", text: `✅ Meeting scheduled! Join: ${data.meet_link}` };
    // Reset to single success message so history is clean for next request
    setMessages([msg, { role: "assistant", text: "Done! What else can I help you with?" }]);
  }

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #0a0a0f; --surface: #111118; --surface2: #18181f; --border: #2a2a35;
          --accent: #7c6af7; --accent2: #4ef0c4; --accent3: #f0694e;
          --text: #e8e8f0; --muted: #6b6b80; --user-bg: #1e1b3a; --radius: 16px;
        }
        body { background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; }
        .app { min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; max-width: 820px; margin: 0 auto; padding: 0 16px; }

        /* HEADER */
        .header { display: flex; align-items: center; justify-content: space-between; padding: 20px 0 16px; border-bottom: 1px solid var(--border); gap: 12px; }
        .logo { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .logo-icon { width: 36px; height: 36px; background: linear-gradient(135deg, var(--accent), var(--accent2)); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 16px; }
        .logo-text { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 18px; letter-spacing: -0.5px; }
        .logo-text span { color: var(--accent); }

        /* USER SECTION */
        .user-section { position: relative; display: flex; align-items: center; gap: 8px; }
        .user-chip { display: flex; align-items: center; gap: 8px; background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 6px 12px 6px 6px; cursor: pointer; transition: border-color 0.2s; }
        .user-chip:hover { border-color: var(--accent); }
        .user-avatar { width: 28px; height: 28px; border-radius: 50%; object-fit: cover; }
        .user-avatar-placeholder { width: 28px; height: 28px; border-radius: 50%; background: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: white; font-family: 'Syne', sans-serif; }
        .user-name { font-size: 13px; font-weight: 500; max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .chevron { font-size: 10px; color: var(--muted); transition: transform 0.2s; }
        .chevron.open { transform: rotate(180deg); }

        .add-btn { display: flex; align-items: center; gap: 6px; background: transparent; border: 1px solid var(--border); color: var(--muted); padding: 7px 14px; border-radius: 10px; font-family: 'DM Sans', sans-serif; font-size: 13px; cursor: pointer; transition: all 0.2s; white-space: nowrap; }
        .add-btn:hover { border-color: var(--accent); color: var(--accent); }

        /* DROPDOWN */
        .user-dropdown { position: absolute; top: calc(100% + 8px); right: 0; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 8px; min-width: 240px; z-index: 100; box-shadow: 0 8px 32px rgba(0,0,0,0.4); animation: fadeUp 0.2s ease; }
        .dropdown-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: var(--muted); padding: 4px 8px 8px; }
        .dropdown-user { display: flex; align-items: center; gap: 10px; padding: 8px; border-radius: 8px; cursor: pointer; transition: background 0.15s; }
        .dropdown-user:hover { background: var(--surface2); }
        .dropdown-user.active { background: #1a1840; }
        .dropdown-user-info { flex: 1; min-width: 0; }
        .dropdown-user-name { font-size: 13px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .dropdown-user-email { font-size: 11px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .logout-btn { background: transparent; border: none; color: var(--muted); font-size: 14px; cursor: pointer; padding: 2px 4px; border-radius: 4px; transition: color 0.2s; }
        .logout-btn:hover { color: var(--accent3); }
        .dropdown-divider { border: none; border-top: 1px solid var(--border); margin: 6px 0; }
        .dropdown-add { display: flex; align-items: center; gap: 8px; padding: 8px; border-radius: 8px; cursor: pointer; color: var(--accent); font-size: 13px; font-weight: 500; transition: background 0.15s; }
        .dropdown-add:hover { background: #1a1840; }

        /* MESSAGES */
        .messages { padding: 20px 0; display: flex; flex-direction: column; gap: 14px; overflow-y: auto; min-height: 0; max-height: calc(100vh - 170px); }
        .msg-row { display: flex; gap: 10px; animation: fadeUp 0.3s ease both; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .msg-row.user { flex-direction: row-reverse; }
        .avatar { width: 34px; height: 34px; border-radius: 10px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 14px; }
        .avatar.ai { background: linear-gradient(135deg, var(--accent), var(--accent2)); }
        .avatar.user { background: var(--user-bg); border: 1px solid var(--accent); color: var(--accent); font-family: 'Syne', sans-serif; font-weight: 700; font-size: 12px; }
        .bubble { max-width: 560px; padding: 11px 15px; border-radius: var(--radius); font-size: 14.5px; line-height: 1.6; }
        .bubble.ai { background: var(--surface); border: 1px solid var(--border); border-top-left-radius: 4px; }
        .bubble.user { background: var(--user-bg); border: 1px solid #312d5a; border-top-right-radius: 4px; color: #c8c4f0; }
        .bubble.success { background: #0f2a1e; border: 1px solid #1a4a35; color: var(--accent2); }

        /* DRAFT CARDS */
        .draft-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 18px; max-width: 560px; width: 100%; }
        .draft-header { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
        .draft-badge { font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; padding: 3px 8px; border-radius: 6px; }
        .draft-badge.email { background: #1a1040; color: var(--accent); border: 1px solid #2d1f70; }
        .draft-badge.meet { background: #0f2520; color: var(--accent2); border: 1px solid #1a4035; }
        .draft-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 14px; }
        .draft-field { margin-bottom: 10px; }
        .draft-field label { display: block; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; color: var(--muted); margin-bottom: 4px; }
        .draft-field input, .draft-field textarea { width: 100%; background: var(--surface2); border: 1px solid var(--border); border-radius: 8px; color: var(--text); font-family: 'DM Sans', sans-serif; font-size: 13.5px; padding: 9px 11px; outline: none; transition: border-color 0.2s; resize: vertical; }
        .draft-field input:focus, .draft-field textarea:focus { border-color: var(--accent); }
        .draft-actions { display: flex; gap: 8px; margin-top: 14px; }
        .btn-send { flex: 1; background: linear-gradient(135deg, var(--accent), #5a4fd6); color: white; border: none; padding: 10px 18px; border-radius: 9px; font-family: 'Syne', sans-serif; font-weight: 700; font-size: 13px; cursor: pointer; transition: opacity 0.2s, transform 0.1s; }
        .btn-send:hover { opacity: 0.9; transform: translateY(-1px); }
        .btn-send.meet { background: linear-gradient(135deg, var(--accent2), #1ab88a); color: #001a13; }
        .btn-discard { background: transparent; border: 1px solid var(--border); color: var(--muted); padding: 10px 14px; border-radius: 9px; font-family: 'DM Sans', sans-serif; font-size: 13px; cursor: pointer; }
        .btn-discard:hover { border-color: var(--accent3); color: var(--accent3); }

        /* TYPING */
        .typing { display: flex; align-items: center; gap: 5px; padding: 12px 15px; }
        .typing-dot { width: 6px; height: 6px; background: var(--muted); border-radius: 50%; animation: blink 1.4s infinite both; }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes blink { 0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); } 40% { opacity: 1; transform: scale(1); } }

        /* INPUT */
        .input-area { padding: 14px 0 22px; border-top: 1px solid var(--border); }
        .input-row { display: flex; gap: 10px; align-items: flex-end; background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 10px 10px 10px 16px; transition: border-color 0.2s; }
        .input-row:focus-within { border-color: var(--accent); }
        .input-row textarea { flex: 1; background: transparent; border: none; color: var(--text); font-family: 'DM Sans', sans-serif; font-size: 15px; outline: none; resize: none; max-height: 120px; line-height: 1.5; }
        .input-row textarea::placeholder { color: var(--muted); }
        .send-btn { width: 38px; height: 38px; background: var(--accent); border: none; border-radius: 10px; color: white; font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; flex-shrink: 0; }
        .send-btn:hover { background: #6a5ae7; transform: scale(1.05); }
        .send-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
        .hints { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
        .hint-chip { background: var(--surface2); border: 1px solid var(--border); color: var(--muted); font-size: 12px; padding: 5px 12px; border-radius: 20px; cursor: pointer; transition: all 0.2s; }
        .hint-chip:hover { border-color: var(--accent); color: var(--accent); }

        /* OVERLAY */
        .overlay { position: fixed; inset: 0; z-index: 50; }
      `}</style>

      {/* CLICK OUTSIDE OVERLAY */}
      {showUserMenu && <div className="overlay" onClick={() => setShowUserMenu(false)} />}

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <div className="logo-icon">⚡</div>
          <div className="logo-text">MAILORA   <span>AI-Agent</span></div>
        </div>

        <div className="user-section">
          {currentUser ? (
            <div className="user-chip" onClick={() => setShowUserMenu(!showUserMenu)}>
              {currentUser.picture
                ? <img src={currentUser.picture} className="user-avatar" alt="" />
                : <div className="user-avatar-placeholder">{currentUser.name[0]}</div>
              }
              <span className="user-name">{currentUser.name}</span>
              <span className={`chevron ${showUserMenu ? "open" : ""}`}>▼</span>
            </div>
          ) : (
            <button className="add-btn" onClick={authorizeGmail}>+ Add Account</button>
          )}

          {showUserMenu && (
            <div className="user-dropdown">
              <div className="dropdown-label">Accounts</div>
              {users.map(u => (
                <div key={u.email} className={`dropdown-user ${currentUser?.email === u.email ? "active" : ""}`} onClick={() => switchUser(u)}>
                  {u.picture
                    ? <img src={u.picture} className="user-avatar" alt="" />
                    : <div className="user-avatar-placeholder">{u.name[0]}</div>
                  }
                  <div className="dropdown-user-info">
                    <div className="dropdown-user-name">{u.name}</div>
                    <div className="dropdown-user-email">{u.email}</div>
                  </div>
                  <button className="logout-btn" onClick={e => { e.stopPropagation(); logoutUser(u.email); }} title="Logout">✕</button>
                </div>
              ))}
              <hr className="dropdown-divider" />
              <div className="dropdown-add" onClick={() => { setShowUserMenu(false); authorizeGmail(); }}>
                <span>+</span> Add another account
              </div>
            </div>
          )}
        </div>
      </header>

      {/* MESSAGES */}
      <div className="messages">
        {messages.map((msg, i) => {
          if (msg.role === "user") return (
            <div key={i} className="msg-row user">
              <div className="avatar user">{currentUser?.name?.[0] || "U"}</div>
              <div className="bubble user">{msg.text}</div>
            </div>
          );
          if (msg.role === "assistant") return (
            <div key={i} className="msg-row">
              <div className="avatar ai">🤖</div>
              <div className="bubble ai">{msg.text}</div>
            </div>
          );
          if (msg.role === "success") return (
            <div key={i} className="msg-row">
              <div className="avatar ai">✅</div>
              <div className="bubble success">{msg.text}</div>
            </div>
          );
          if (msg.role === "draft_email") return (
            <div key={i} className="msg-row">
              <div className="avatar ai">📧</div>
              <EmailDraftCard draft={msg.data} onSend={d => sendEmail(d, i)} onDiscard={() => setMessages(prev => prev.filter((_, j) => j !== i))} />
            </div>
          );
          if (msg.role === "draft_meet") return (
            <div key={i} className="msg-row">
              <div className="avatar ai">📅</div>
              <MeetDraftCard draft={msg.data} onSchedule={d => scheduleMeet(d, i)} onDiscard={() => setMessages(prev => prev.filter((_, j) => j !== i))} />
            </div>
          );
          return null;
        })}
        {loading && (
          <div className="msg-row">
            <div className="avatar ai">🤖</div>
            <div className="bubble ai"><div className="typing"><div className="typing-dot"/><div className="typing-dot"/><div className="typing-dot"/></div></div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="input-area">
        <div className="input-row">
          <textarea rows={1} placeholder={currentUser ? "Send an email, schedule a meeting, or just chat..." : "Log in to get started..."}
            value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }} />
          <button className="send-btn" onClick={sendMessage} disabled={loading || !input.trim()}>↑</button>
        </div>
        <div className="hints">
          {["Send an email to john@example.com", "Schedule a 30-min meeting tomorrow at 3pm", "Write a follow-up email"].map(hint => (
            <button key={hint} className="hint-chip" onClick={() => setInput(hint)}>{hint}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function EmailDraftCard({ draft, onSend, onDiscard }: { draft: EmailDraft; onSend: (d: EmailDraft) => void; onDiscard: () => void }) {
  const [d, setD] = useState(draft);
  return (
    <div className="draft-card">
      <div className="draft-header"><span className="draft-badge email">📧 Email Draft</span><span className="draft-title">Ready to send</span></div>
      <div className="draft-field"><label>To</label><input value={d.to} onChange={e => setD({...d, to: e.target.value})} /></div>
      <div className="draft-field"><label>Subject</label><input value={d.subject} onChange={e => setD({...d, subject: e.target.value})} /></div>
      <div className="draft-field"><label>Body</label><textarea rows={5} value={d.body} onChange={e => setD({...d, body: e.target.value})} /></div>
      <div className="draft-actions">
        <button className="btn-send" onClick={() => onSend(d)}>Send Email ✉️</button>
        <button className="btn-discard" onClick={onDiscard}>Discard</button>
      </div>
    </div>
  );
}

function MeetDraftCard({ draft, onSchedule, onDiscard }: { draft: MeetDraft; onSchedule: (d: MeetDraft) => void; onDiscard: () => void }) {
  const [d, setD] = useState({ ...draft, attendees_str: draft.attendees?.join(", ") || "" });
  return (
    <div className="draft-card">
      <div className="draft-header"><span className="draft-badge meet">📅 Meet Draft</span><span className="draft-title">Google Meet</span></div>
      <div className="draft-field"><label>Title</label><input value={d.title} onChange={e => setD({...d, title: e.target.value})} /></div>
      <div className="draft-field"><label>Attendees (comma-separated)</label><input value={d.attendees_str} onChange={e => setD({...d, attendees_str: e.target.value})} /></div>
      <div className="draft-field"><label>Start (YYYY-MM-DDTHH:MM:SS)</label><input value={d.start_time} onChange={e => setD({...d, start_time: e.target.value})} /></div>
      <div className="draft-field"><label>End (YYYY-MM-DDTHH:MM:SS)</label><input value={d.end_time} onChange={e => setD({...d, end_time: e.target.value})} /></div>
      <div className="draft-field"><label>Description</label><textarea rows={3} value={d.description || ""} onChange={e => setD({...d, description: e.target.value})} /></div>
      <div className="draft-actions">
        <button className="btn-send meet" onClick={() => onSchedule({ title: d.title, attendees: d.attendees_str.split(",").map(e => e.trim()).filter(Boolean), start_time: d.start_time, end_time: d.end_time, description: d.description })}>Schedule Meet 📅</button>
        <button className="btn-discard" onClick={onDiscard}>Discard</button>
      </div>
    </div>
  );
}

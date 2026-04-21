# Batch-draft LinkedIn recommendation requests in Gmail via Claude

You have a CSV of 13 contacts (`recommendations.csv`) from Leigh-Ann's private dashboard. Each row has a ready-to-send subject line, email body, sample recommendation, and a status code. Claude will read the CSV and, for every row that is actually sendable, create a Gmail draft through the Gmail connector so you can review and send them one at a time.

This doc has three parts:
1. How to set up Claude + Gmail connector (one-time)
2. The system prompt to paste into Claude
3. How to verify what Claude drafted before sending

---

## 1. One-time Gmail connector setup

In Claude (desktop or web), you need the Gmail connector enabled on your account so Claude can create drafts in your mailbox.

1. Open Claude.
2. Click the connectors menu (the plug icon near the message input, or go to Settings, then Connectors).
3. Find "Gmail" in the list and click Connect.
4. Sign in with `lmartinlapc@gmail.com` when prompted.
5. Grant permission to "create drafts in your Gmail account." You can deny send permission if you want to keep Claude draft-only.
6. Back in the chat, confirm the Gmail connector is toggled on for this conversation.

You only do this once. After that, the connector stays available in future conversations.

---

## 2. The system prompt

Paste the block below into Claude as your first message. Attach `recommendations.csv` before sending (drag it in, or use the paperclip icon).

```
I'm going to send you a CSV called recommendations.csv. Every row is a LinkedIn recommendation request I want to send to a former colleague. I need you to create one Gmail draft per row that is ready to send.

Rules for which rows to process:

1. Status "live": SKIP. That recommendation is already posted on LinkedIn, no email needed.
2. Status "sent": SKIP. I've already sent that email and am awaiting a response.
3. Status "ready": DRAFT IT. Contact info is confirmed, draft goes straight to my Gmail drafts folder.
4. Status "draft-needed" or "needs-info": DRAFT IT anyway and prefix the draft subject with "[REVIEW BEFORE SEND] " so I notice. The email body has bracketed placeholders I need to fill in, or the email address is still a placeholder. I'll fix those before sending.
5. Status "second-tier": DRAFT IT and prefix the draft subject with "[SECOND TIER] ". I'll only send these if the priority-one responses come back strong.

For each row you DRAFT:

- Use the Gmail connector to create a draft (not send) in my Gmail account.
- To: the value in the "email" column. If the email field contains square brackets (placeholder), still create the draft but leave the To field empty and note in the draft that the address is pending.
- Subject: exactly the value in "email_subject", with the optional prefix described above.
- Body: exactly the value in "email_body". Do not rewrite it. Keep the formatting including the triple-dash separators and the LinkedIn URL. My pre-written drafts reference specific metrics that come from my resume and intake transcripts, so please do not "improve" the language.

Process every row in the CSV. After you finish, give me a summary in this format:

- Drafted: N emails (list names)
- Skipped live/sent: N (list names and why)
- Needs my attention: N (list names and what's missing)

Do not send any email. Drafts only.
```

---

## 3. Verify before sending

After Claude finishes, pop into Gmail at mail.google.com and go to the Drafts folder. For each draft:

- **To field is correct.** If the draft still has a placeholder (a bracketed string) in the recipient, replace it with the actual email.
- **Subject matches** what you see in the CSV (with any prefix Claude added). Remove the `[REVIEW BEFORE SEND]` or `[SECOND TIER]` prefixes before you actually send.
- **Body has no invented content.** Scroll through and confirm every sentence matches what is in the CSV. Claude should not have rewritten the language. If anything feels off, open the CSV row directly in Numbers, Excel, or Google Sheets and compare.
- **LinkedIn URL is intact.** The draft should contain `https://www.linkedin.com/in/leigh-ann-martin/edit/forms/recommendation/write` toward the bottom of the body.
- **Amber's draft has placeholders.** Her email body contains two spots in square brackets (specific example and personal observation). Fill those in with details from your collaboration notes before sending.
- **Laura and Courtney still need personal emails.** Their drafts will have empty To fields. Get the addresses before sending.
- **Eric Venker's surname spelling.** Check his LinkedIn profile and confirm the correct spelling before sending.

When a draft is ready, click Send. That's it.

---

## Appendix: status glossary

| Status | What it means | Claude action |
|---|---|---|
| `live` | Recommendation already posted on LinkedIn | Skip |
| `sent` | Email already sent, awaiting reply | Skip |
| `ready` | Contact info confirmed, draft good to send | Create Gmail draft |
| `needs-info` | Draft ready but email address or last name still needed | Create Gmail draft with `[REVIEW BEFORE SEND]` prefix |
| `draft-needed` | Fresh draft required; email body has bracketed placeholders | Create Gmail draft with `[REVIEW BEFORE SEND]` prefix |
| `second-tier` | Only send if priority-one responses go well | Create Gmail draft with `[SECOND TIER]` prefix |

## Appendix: CSV columns

| Column | What it is |
|---|---|
| `priority` | P1, P2, or P3 (P1 is top) |
| `status` | See glossary above |
| `name` | Recipient's display name |
| `title` | Recipient's role at the company |
| `company` | Immunovant, Ascend Wellness Holdings, or Mattio Communications |
| `email` | Recipient's email or a bracketed placeholder |
| `linkedin` | Their LinkedIn profile URL (or a confirmation note) |
| `relationship` | Short context for why Leigh-Ann is asking them (do not paste into email) |
| `email_subject` | The subject line to use, verbatim |
| `email_body` | The email body to use, verbatim |
| `sample_recommendation` | The LinkedIn recommendation copy embedded inside the email (also for the person's reference) |
| `notes` | Internal notes about the row (do not paste into email) |

The `relationship` and `notes` columns are for Leigh-Ann's reference, not for the recipient. Claude should not include them in the Gmail draft.

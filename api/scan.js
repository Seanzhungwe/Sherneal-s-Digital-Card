// api/scan.js
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const url = new URL(req.url);
  const userAgent = req.headers.get('user-agent') || 'unknown';
  const timestamp = new Date().toISOString();

  // LOGGING (Phase 1: Console)
  // Initially, we will just log to the Vercel dashboard. 
  // Once you have Supabase set up, we will add the database insert here.
  console.log(`Scan Detected! Time: ${timestamp}, Device: ${userAgent}`);

  // THE DYNAMIC LINK
  // Change this URL whenever you want the QR code to point elsewhere.
  const destination = "https://your-temporary-link.com"; 

  return Response.redirect(destination, 307); // 307 = Temporary Redirect
}
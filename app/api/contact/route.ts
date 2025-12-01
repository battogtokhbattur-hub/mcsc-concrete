export async function POST(request: Request) {
  const body = await request.json();
  console.log("Contact form:", body);
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

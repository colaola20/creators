export async function handler(event, context) {
  // Access your secret safely
  const apiKey = process.env.API_KEY;

  // Example API request
  const res = await fetch(`https://api.example.com/data?key=${apiKey}`);
  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}

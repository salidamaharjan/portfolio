export async function get(url: string) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function post(url: string, body: any) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

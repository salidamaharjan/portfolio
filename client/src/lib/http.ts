export async function get(url: string) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
    const token = localStorage.getItem("token");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function put(url: string, body: any) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function deleteItem(url: string) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

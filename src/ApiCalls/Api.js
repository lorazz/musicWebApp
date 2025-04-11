export async function getAccessToken() {
  const clientId = "6e5d4837cfba4f15aa7dd531a8a7a038";
  const clientSecret = "29fbb6b7333b46609361f8240a4d8dc6";

  const body = new URLSearchParams();
  body.append("grant_type", "client_credentials");
  body.append("client_id", clientId);
  body.append("client_secret", clientSecret);

  const apiUrl = `https://accounts.spotify.com/api/token`;

  let response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  response = await response.json();

  return response.access_token;
}

export async function getSpotifyData(endpoint) {
  const token = await getAccessToken();
  const apiUrl = `https://api.spotify.com/v1/${endpoint}`;

  let response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  response = await response.json();

  return response;
}

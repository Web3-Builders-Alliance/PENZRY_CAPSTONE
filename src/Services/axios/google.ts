import axios from "axios";

const BASE_URL = "https://www.googleapis.com/oauth2/v3/userinfo";

export default axios.create({
  baseURL: BASE_URL,
});

export async function user() {
  const data = await axios.get(BASE_URL, {
    headers: {
      accept: "application/json",
      authorization:
        "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRZT2dnXy01RU9FYmxhWS1WVlJZcVZhREFncHRuZktWNDUzNU1aUEMwdzAifQ.eyJpYXQiOjE2OTc5MjUxNjIsImF1ZCI6IkJFaXFhSGw4dV9wSkNpV0QyejFrNWRuVVMyNE1yTU5pR2NyOTRpb2JHWXVEQ0RrRHVYTXBLN2ZJdFZKUFRyX1BobkozN2lWS3RVVmlhUXJ4R3JINGpfMCIsIm5vbmNlIjoiMDM0ODZiNzRjMjgwYWQyOGE5MmM4MzU4MDZjYWRjODdmZGMyZmE1MDVjMjlmYzBjNmU2ZWJkOTUyNzcxODJlZjhiIiwiaXNzIjoiaHR0cHM6Ly9hcGktYXV0aC53ZWIzYXV0aC5pbyIsIndhbGxldHMiOlt7InB1YmxpY19rZXkiOiIwYjJkZTYzYWI4ODA2NDI1ZWIxMTM3Y2Y5N2YzMWVkMzM4OTlhYzZhNDAzNDlmNWY1Njc5YmE2NjEyZDdkYTBhIiwidHlwZSI6IndlYjNhdXRoX2FwcF9rZXkiLCJjdXJ2ZSI6ImVkMjU1MTkifV0sImVtYWlsIjoiZmF2b3VyYWxleDA4NEBnbWFpbC5jb20iLCJuYW1lIjoiQWxleCBGYXZvdXIiLCJwcm9maWxlSW1hZ2UiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJMldUWHB5MzVKQjIxQUkxRW5xdXJqU25XamotdzVIS25VdjlRN2dHYi1Jdlk9czk2LWMiLCJ2ZXJpZmllciI6InRvcnVzIiwidmVyaWZpZXJJZCI6ImZhdm91cmFsZXgwODRAZ21haWwuY29tIiwiYWdncmVnYXRlVmVyaWZpZXIiOiJ0a2V5LWdvb2dsZSIsImV4cCI6MTY5ODAxMTU2Mn0.07iHHI1fpRvcJ_iM4UEHKug6l-AdpyGWEDLm7czDYtAmaW_K2vRS_mERDpDXoLYeStLUP3f_7s-WWzOp1f6w6g",
    },
  });
  console.log(data.data);
}

import http from "k6/http";
import { check, sleep } from "k6";

// export const options = {
//   stages: [
//     { duration: "2m", target: 10 },
//     { duration: "1m", target: 0 },
//   ],
// };

// export const options = {
//   vus: 3,
//   duration: "2m",
// };

export const options = {
  stages: [
    { duration: "1m", target: 4 },
    { duration: "2m", target: 4 },
    { duration: "1m", target: 0 },
  ],
};

export default function () {
  const urlRes = http.get("https://test.k6.io");
  sleep(1);
}

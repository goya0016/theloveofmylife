/** @jsxImportSource https://esm.sh/react@18.2.0 */
import { motion } from "https://esm.sh/framer-motion@11.0.3?deps=react@18.2.0,react-dom@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";
import React from "https://esm.sh/react@18.2.0";

function App() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "white",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: "#C0C1FF",
          borderRadius: "20px",
          padding: "clamp(15px, 5vw, 30px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "500px",
          aspectRatio: "3/4",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 465 347"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            transform: "scale(0.9)",
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M2 43C28.7906 43 55.7453 42.0924 82.5 43.5556C91.7654 44.0623 100.779 45.1947 109.778 47.4444C119.141 49.7854 111.67 49.9607 105.889 50.2222C88.195 51.0229 72.4137 53.2675 55.6111 47.6667C54.8238 47.4042 55 60.4228 55 61C55 80.2968 55.4953 99.6404 52.5556 118.778C49.1988 140.63 44.8948 162.606 40.9444 184.333C40.5783 186.347 22.9906 171.174 20.4444 169.444C19.0343 168.487 15.9619 167.064 19.4444 167C28.8444 166.826 38.2135 166.333 47.6111 166C61.7582 165.499 75.8451 165 90 165"
            stroke="#5CF1FF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <motion.path
            d="M173 47C173 66.7407 173 86.4815 173 106.222C173 117.551 171.867 129.553 173.778 140.778C174.194 143.222 174.703 150.323 177.222 151.222C192.537 156.692 212.079 156.704 228 154C234.735 152.856 247.982 150.018 253 145"
            stroke="#5CF1FF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <motion.path
            d="M264 99C258.259 105.315 258 113.995 258 122.056C258 132.293 258.149 142.251 270.056 144.444C278.048 145.917 287.038 144.198 291.389 136.5C294.9 130.288 290.278 124.267 285.556 120.111C280.314 115.498 275 114.046 275 107C275 101.677 270.998 100.999 267 99"
            stroke="#5CF1FF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <motion.path
            d="M302 104C302.667 107.334 306.41 111.229 307.889 114.222C312.288 123.125 315.448 132.137 317.444 141.833C317.621 142.693 318.012 146.46 318.056 146.222C319.092 140.524 319.262 134.741 320 129C321.481 117.484 322.739 102.682 330 93"
            stroke="#5CF1FF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <motion.path
            d="M344 112C351.632 112 359.381 112.423 367 112C369.608 111.855 367.049 103.929 365.778 103C361.069 99.5589 354.626 99.8235 349.222 98.2222C344.085 96.7001 344.624 101.186 343.5 106.556C341.305 117.045 341.083 129.187 342.056 139.889C342.609 145.973 348.435 145.443 353 144.444C355.777 143.837 365.465 141.131 367 138.444C368.147 136.438 371.08 132.96 373 132"
            stroke="#5CF1FF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <motion.path
            d="M464 86C464 89.5185 464 93.037 464 96.5556C464 103.912 461.424 116.424 465.667 122.889C472.863 133.854 496.652 129.663 506.333 125.778C516.141 121.842 531 112.113 531 100.056C531 88.999 512.211 82.8467 504.444 79C494.231 73.9411 487.354 70.1827 476 72.7778C469.812 74.1921 468.449 80.2039 467 86"
            stroke="#5CF1FF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <motion.path
            d="M556 53C556 64.963 556 76.9259 556 88.8889C556 102.435 571.248 104.505 581.556 101.389C599.047 96.1008 608 76.3807 608 59.7778C608 50.0385 610.763 35.6448 605 27"
            stroke="#5CF1FF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <motion.path
            d="M380 15C383.902 15 388.143 20.8507 391 23.2222C396.183 27.5252 401.451 31.5554 407.778 34C413.819 36.3342 423.062 37.3751 429.5 35.9444C441.294 33.3236 441 14.059 441 5.22222C441 2.34681 440.919 2 438 2C432.97 2 433.718 24.1035 433.5 27.5556C432.036 50.6905 435 73.5234 435 96.5C435 101.776 430.789 107.169 429.778 112.222C428.375 119.235 426.529 125.869 425.056 132.5C424.124 136.692 424.41 143.795 420 146"
            stroke="#5CF1FF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <motion.path
            d="M317 241C325.436 223.191 356.721 219.303 368 236.222C369.767 238.873 371.225 241.956 372 245.056C372.298 246.246 373.929 251.903 374 247.556C374.314 228.411 375.516 204.361 397.778 198C404.244 196.153 411.853 194.488 418 198C425.874 202.499 425.143 220.988 423.556 228.222C421.487 237.647 416.558 246.514 413.056 255.444C410.605 261.693 408.65 268.311 405 274C399.865 282.005 394.051 291.258 390.5 300C387.048 308.497 383.995 317.024 382 326C381.148 329.832 379 341.315 379 337.389C379 330.94 374.847 322.498 372.5 316.5C369.871 309.782 365.921 304.556 361.556 299C353.52 288.773 342.565 280.698 333.944 271C331.259 267.979 309.957 250.522 319 246"
            stroke="#FF0000"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <motion.path
            d="M319 240C319 243.532 318 246.611 318 250"
            stroke="#FF0000"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

function client() {
  ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
}
if (typeof document !== "undefined") {
  client();
}

export default async function server(request: Request): Promise<Response> {
  return new Response(
    `
    <html>
      <head>
        <title>Love you</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { margin: 0; font-family: system-ui, sans-serif; }
          @media (max-width: 600px) {
            svg { stroke-width: 6px; }
          }
        </style>
      </head>
      <body>
        <div id="root"></div>
        <script src="https://esm.town/v/std/catch"></script>
        <script type="module" src="${import.meta.url}"></script>
      </body>
    </html>
  `,
    {
      headers: { "content-type": "text/html" },
    }
  );
}

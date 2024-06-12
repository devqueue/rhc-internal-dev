// // public/service-worker.js
// let authToken = '';

// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'SET_AUTH_TOKEN') {
//     authToken = event.data.token;
//   }
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(handleFetch(event.request));
// });

// async function handleFetch(request) {
//   if (authToken) {
//     // Clone the request to modify headers
//     const modifiedRequest = new Request(request, {
//       headers: new Headers({
//         ...Object.fromEntries(request.headers.entries()),
//         'Authorization': `Bearer ${authToken}`
//       }),
//       // Ensure the request mode and credentials are preserved
//       mode: request.mode,
//       credentials: request.credentials,
//       redirect: 'manual', // Handle redirects manually
//     });

//     try {
//       // Fetch the resource with the modified request
//       let response = await fetch(modifiedRequest);

//       // If response status is 302, handle the redirect
//       while (response.status === 302) {
//         const redirectUrl = response.headers.get('Location');
//         if (redirectUrl) {
//           // Fetch the redirected resource
//           const redirectRequest = new Request(redirectUrl, {
//             headers: new Headers({
//               'Authorization': `Bearer ${authToken}`
//             }),
//             mode: 'cors', // Ensure CORS mode is set correctly
//             credentials: 'include',
//           });

//           response = await fetch(redirectRequest);
//         } else {
//           break;
//         }
//       }

//       // Return the final response
//       return response;
//     } catch (error) {
//       console.error('Fetch error:', error);
//       return new Response('Fetch error', { status: 500 });
//     }
//   } else {
//     // If authToken is not available, proceed with the original request
//     return fetch(request);
//   }
// }

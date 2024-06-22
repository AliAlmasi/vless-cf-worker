addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // إعداد المعلومات الخاصة بخادم VLESS
  const vlessServerUrl = 'j.jalal.cloudns.biz'; // استبدل هذا بعنوان خادم VLESS الخاص بك
  const uuid = '4e414f0b-48ca-431e-93df-7edcf9507a81'; // استبدل هذا بمعرف UUID الخاص بك
  
  // محاكاة حدوث خطأ 1011 عند طلب عنوان معين
  const url = new URL(request.url)
  if (url.pathname === '/trigger-error') {
    return new Response('Error 1011: Worker threw exception', {
      status: 1011,
      statusText: 'Worker threw exception'
    });
  }

  // إعداد الطلب إلى خادم VLESS
  url.hostname = new URL(vlessServerUrl).hostname;

  // إضافة UUID إلى الهيدر (إذا كان ضرورياً)
  const newRequest = new Request(url, {
    method: request.method,
    headers: new Headers({
      ...Object.fromEntries(request.headers),
      'x-vless-uuid': uuid // استبدل هذا بالهيدر المناسب إذا كان مطلوباً
    }),
    body: request.body,
    redirect: 'follow'
  });

  // محاولة إرسال الطلب إلى خادم VLESS
  try {
    const response = await fetch(newRequest)
    return response;
  } catch (error) {
    // إرجاع خطأ 1011 في حالة حدوث أي خطأ أثناء إرسال الطلب
    return new Response('Error 1011: Worker threw exception', {
      status: 1011,
      statusText: 'Worker threw exception'
    });
  }
}

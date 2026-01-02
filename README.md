تمرینات جلسه سوم

یک پروژه جدید با دستور y- init npmبسازید

mkdir node-api-project
cd node-api-project
npm init -y

پکیج axiosرا نصب کنید
پکیج colorsرا نصب کنید

npm install axios colors


یک فایل به نام js.indexبسازید.

code index.js


 با استفاده ازaxios ، یک درخواست GET به آدرس زیرارسال کنید:

https://jsonplaceholder.typicode.com/todos/1
.6 نتیجه برگشتی را در کنسول چاپ کنید.
.7 متن برگشتی را با استفاده از colors رنگی کنید )به دلخواه: قرمز، سبز، آبی)




const axios = require('axios');
const colors = require('colors');

console.log('Sending request to server...'.cyan);

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log('\nData received successfully!\n'.green);
    
    const data = response.data;
    
    console.log('Received Information:'.rainbow);
    console.log('ID:'.yellow, data.id.toString().bold);
    console.log('User ID:'.yellow, `User ${data.userId}`.cyan);
    console.log('Title:'.yellow, data.title.bold);
    
    if (data.completed) {
      console.log('Status:'.yellow, 'Completed'.green.bold);
    } else {
      console.log('Status:'.yellow, 'Not Completed'.red.bold);
    }
    
    console.log('\nRaw JSON Data:'.rainbow);
    console.log(JSON.stringify(data, null, 2).blue);
    
  })
  .catch(error => {
    console.error('Error in receiving data:'.red.bold);
    console.error(error.message.red);
  })
  .finally(() => {
    console.log('\nProgram Ended'.magenta);
  });



**پاسخ سوالات:**

1. **کدام دستور برای نصب تمام پکیج‌های تعریف‌شده داخل package.json استفاده می‌شود؟**


   - **پاسخ صحیح: B) `npm install`**

2. **دستور `npm uninstall axios` چه کاری انجام می‌دهد؟**
   - **پاسخ صحیح: B) حذف می‌کند `axios` را از node_modules**


  
3. **دستور `npm update` چه کاری انجام می‌دهد؟**
   - **پاسخ صحیح: B) تمامی پکیج‌ها را به آخرین نسخه‌های سازگار آپدیت می‌کند**



4. **فایل `package.json` توسط کدام دستور ایجاد می‌شود؟**
   - **پاسخ صحیح: A) `npm init`**


 
5. **کدام دستور برای دریافت اطلاعات کامل یک پکیج از registry استفاده می‌شود؟**


   - **پاسخ صحیح: C) `npm view`**
   
6. **کدام گزینه نشان‌دهنده `devDependencies` است؟**
   - **پاسخ صحیح: B) پکیج‌هایی که فقط هنگام توسعه لازم هستند**



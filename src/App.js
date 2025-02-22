import { useState, useEffect } from 'react'

// Bu bileşen input alanındaki değişiklikleri izleyerek toplam değişiklik sayısını gösterir. Ancak mevcut kodda sonsuz döngüye neden olan sorun bulunmaktadır.
// Görevler:
// 1. useEffect içindeki sonsuz döngüyü düzeltin ve yalnızca value state'i değiştiğinde count değerini güncelleyin.
//    - useEffect bağımlılık array'ini doğru bir şekilde ayarlayın.
// 2. Input alanına her değişiklik yapıldığında, "Toplam değişiklikler" değeri doğru şekilde artmalıdır.
// 3. Kullanıcı "value" alanını sıfırlamak için bir "Temizle" butonu ekleyin ve bu butona tıklandığında input değerini temizleyin ve bir değişiklik sayısı artışı yapmayın.
// 4. Kullanıcı "value" alanına yazı yazdıkça yazıyı konsola yazdıran bir console.log ekleyin.

// Bonus:
// - Kullanıcı "value" alanına hızlıca çok fazla değişiklik yaptığında (örneğin 5 değişiklik/3 saniye), uyarı gösterin (örneğin, "Çok hızlı değişiklik yapıyorsunuz").
// – Toplam değişiklik sayısını 0'a eşitlendiğinde, bu durumu vurgulamak için görsel geri bildirim sağlayın (örn. "Hiç değişiklik yapılmadı" mesajı).
// - count değeri belirli bir eşik değere (örneğin, 10) ulaştığında input alanını devre dışı bırakın ve mesaj gösterin (örn. "Maksimum değişiklik sayısına ulaştınız.").

// Tailwind ile ilgili istekler:
// 1. "Toplam değişiklikler" metninin rengini, değişiklik sayısına bağlı olarak dinamik hale getirin (örn. düşük sayılar için yeşil, yüksek sayılar için kırmızı).
// 2. Input alanına yazı yazıldığında, alanın arka plan rengini geçici olarak farklı bir renge dönüştürerek görsel geri bildirim sağlayın.
// 3. "Temizle" butonunu hover ve focus durumları için görsel olarak belirgin hale getirin (örn. arka plan rengini değiştirin veya gölge ekleyin).
// 4. Mobil cihazlar için input alanını daha büyük yapın ve yazı tipi boyutunu optimize edin.
// 5. Input alanı boş olduğunda, alanın kenar çizgisi ve placeholder rengini daha belirgin hale getirin.

export default function InputChanges() {
  const [value, setValue] = useState('')
  const [count, setCount] = useState(-1)

  // useEffect(() => {
  //   setCount(c=>c + 1);
  // });

  function onChange(event) {
    setValue(event.target.value)
  }

  return (
    <div className='mx-auto max-w-md p-8'>
      <label
        htmlFor='changes'
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        Toplam değişiklikler ( {count})
      </label>
      <div className='mt-2'>
        <input
          id='changes'
          className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          onChange={onChange}
        />
      </div>
    </div>
  )
}

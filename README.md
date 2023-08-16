
# React İmza Komponenti
![Screenshot](screenshots/ss.png)

Bu repo, kullanıcının imzasını çizmesi için bir React komponenti içermektedir. İmza, ekranın boyutuna göre ayarlanabilen bir tuval üzerinde çizilir. Ayrıca imzanın silinip silinmemesi için bir onay modalı da içermektedir.

## Özellikler:
- İmzanın çizilmesi için tuval.
- İmza boyutunun ekranın genişliğine göre ayarlanması.
- İmzanın silinmesi için modal onay penceresi.
- İmzanın silinmesi için çöp kutusu ikonu.
- İmza verilerinin PNG formatında dönüştürülmesi.

## Kurulum ve Kullanım:
1. Bu repoyu klonlayın veya indirin.
   ```
   git clone https://github.com/hsnlbnan/remove-with-signature-modal
   ```

2. Bağımlılıkları yükleyin:
   ```
   npm install
   ```
   veya
   ```
   yarn install
   ```

3. Uygulamayı çalıştırın:
   ```
   npm start
   ```
   veya
   ```
   yarn start
   ```

## Bağımlılıklar:
Bu komponentin çalışması için bazı harici kütüphanelere ihtiyacı vardır:

- `next/image`: Resim optimizasyonu ve görüntüleme için kullanılır.
- `react-signature-canvas`: İmza tuvali için kullanılır.
- `framer-motion`: Animasyonlar ve geçişler için kullanılır.

## Katkıda Bulunma:
Bu projeye katkıda bulunmak isterseniz, lütfen pull request gönderin. Öneri, soru veya geri bildirimleriniz için issue oluşturabilirsiniz.

---

Bu projeyi kullanırken veya geliştirirken karşılaştığınız sorunlarda, bu reponun issue bölümünden yardım alabilirsiniz. İyi kodlamalar!

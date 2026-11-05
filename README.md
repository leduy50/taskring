# TaskRing — trang web

Trang giới thiệu, chính sách quyền riêng tư và hỗ trợ cho ứng dụng Windows **TaskRing**.
HTML + CSS thuần, không cần cài gì, không có bước build. Đăng bằng GitHub Pages.

| Tệp | Nội dung |
|---|---|
| `index.html` | Giới thiệu, tính năng, ảnh chụp, yêu cầu hệ thống |
| `privacy.html` | Chính sách quyền riêng tư (dán đường dẫn vào Partner Center → *Privacy policy URL*) |
| `support.html` | Hỗ trợ, câu hỏi thường gặp, liên hệ |
| `assets/style.css` | Giao diện (sáng / tối theo hệ thống) |
| `assets/site.js` | Nút đổi ngôn ngữ Việt / Anh (nhớ lựa chọn) |

## Song ngữ

Mỗi đoạn chữ có hai bản: `<span lang="vi">…</span><span lang="en">…</span>`.
Sửa chữ thì sửa cả hai bản.

## Việc còn lại

- **Nút Microsoft Store**: trong `index.html`, tìm `id="store-link"`, thay `href="#"` bằng đường dẫn Store khi có.
- **Ảnh chụp màn hình**: chép ảnh vào `assets/screenshots/` với tên
  `wheel.png`, `drag-files.png`, `shelf.png`, `settings.png`, rồi trong `index.html` thay khung
  `<div class="shot-frame">…</div>` bằng `<div class="shot-frame"><img src="assets/screenshots/wheel.png" alt="…"></div>`.

## Đăng lên GitHub Pages

Kho phải **công khai**. Sau khi đẩy lên: *Settings → Pages → Deploy from a branch → `main` / `(root)`*.
Đường dẫn dự kiến (kho `leduy50/taskring`):

- https://leduy50.github.io/taskring/
- https://leduy50.github.io/taskring/privacy.html
- https://leduy50.github.io/taskring/support.html

Liên hệ: leduy50@gmail.com

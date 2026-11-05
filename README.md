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

- **Nút Microsoft Store**: `index.html`, `id="store-link"` → https://apps.microsoft.com/detail/9PC5ZHMF9STJ (Store ID 9PC5ZHMF9STJ).

## Ảnh chụp màn hình

`assets/screenshots/vi/` và `assets/screenshots/en/` (JPG 1200×900, cắt và thu nhỏ từ ảnh Store
`RadialDrop\dist\store-screenshots`). Trang tự hiện bộ ảnh theo ngôn ngữ đang chọn.
Thay ảnh: giữ đúng tên tệp, chép đè.

## Đăng lên GitHub Pages

Kho phải **công khai**. Sau khi đẩy lên: *Settings → Pages → Deploy from a branch → `main` / `(root)`*.
Đường dẫn dự kiến (kho `leduy50/taskring`):

- https://leduy50.github.io/taskring/
- https://leduy50.github.io/taskring/privacy.html
- https://leduy50.github.io/taskring/support.html

Liên hệ: leduy50@gmail.com

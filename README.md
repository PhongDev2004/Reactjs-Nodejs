# Hệ thống quản lý dự án
Hệ thông quản lý dự án Graduation Project

### Công nghệ

- [ReactJs] xây dựng web app: Reactjs, Tailwind
- [ExpressJs] xây dựng APIs, ExpressJs
- [MongoDB] cơ sở dữ liệu

### Chạy dự án trên local

- Clone dự án và cài đặt package


```sh
// Bước 1: clone code dự án
git clone https://github.com/PhongDev2004/...
// Bước 2: di chuyển vào thư mục làm việc
cd graduation-project
// Bước 3: cài đặt package thư mục gốc
npm install
// Bước 4: cài đặt backend và client package
npm run install-all

// Bước 5: chạy ứng dụng
npm run dev
```
### Các scripts 
```sh
"scripts": {
    "start": "concurrently \"cd backend && npm run start\" \"cd frontend && npm run start\"",
    "dev": "concurrently \"cd backend && npm run dev\" \"cd frontend && npm run start\"",
    "install-all": "concurrently \"cd backend && npm install\" \"cd frontend && npm install\"",
    "format": "concurrently \"cd backend && npm run format\" \"cd frontend && npm run format\""
  },
// Khởi chạy cả backend và client
npm run start
//  Khởi chạy cả backend (developer) và client
npm run dev
// cài package cho backend và client
npm run install-all
// format code cho backend và client 
npm run format 
```

### Các bước làm việc với git
#### Khi triển khai 1 task
```
- Step 1: Checkout sang nhánh main và lấy code mới nhất
Command: git checkout main
- Step 2: Lấy code mới nhât từ nhánh main
Command: git pull origin main
- Step 3: Tạo ra 1 nhánh mới từ nhánh main. Theo quy tắc: feature/id_task/tên_người_lam/tiêu_đề_task
Ví dụ: feature/99/hoplb/show-config-data
Command: git checkout -b feature/99/phonglb/show-config-data
- Step 4 Tiến hành viết code cho task của mình
Step 5: Đẩy code lên nhánh mới vừa rồi
5.1 Format lại toàn bộ code
Command: npm run format (bước này có thể bỏ qua ở một số dự án)
5.2 Kiểm tra code đã thay đổi gì chưa(bước này có thể bỏ qua)
Command: git status
5.3 Lưu toàn bộ code vào local
Command: git add .
5.4 Ghi nội dung đã làm cho đoạn code đã sửa
Command: git commit -m"Show config data in admin page"
5.5 Lấy code mới nhất từ nhánh main về
Command: git pull origin main
Nếu có conflict tiến hành sửa conflict và chạy  git add, git commit lại
5.6 Đẩy code lên nhánh hiện tại
Command: git push origin feature/99/hoplb/show-config-data
Step 6: Tạo pull request
Merge code từ nhánh hiện tại vào nhánh main, không push code thẳng lên nhánh main
```
#### Một số lệnh git khác hay dùng
- git stash: Khi đã sửa file và muốn lấy code mới nhất, có 2 cách để làm. Một là git add ., git commit để lưu code đã làm. Hai là dùng git stash để bỏ qua những file đã sửa và lưu tạm thời, rồi git pull để lấy code về. Để lấy code đã sửa trước đó chạy git stash pop.
- git cherry-pick
- git reset --hard ID_COMMIT
- git branch 
- git log
- git revert ID_COMMIT
### Cấu trúc dự án
#### Thư mục gốc
Chứa các script để chạy dự án
#### Thư mục backend
- Chứa code backend

#### Thư mục client
- Chứa code client

### Quy tắc khi viết code
```
Sau đây là một số quy chuẩn đặt tên thường dùng trong dự án:
- Tên lớp đặt theo PascalCase, ví dụ: UserClass, CategoryClass…
- Tên hàm và phương thức sử dụng camelCase, ví dụ getUser, getCategory…
- Tên biến cũng sử dụng camelCase loginUser, categoryList…
- Tên hằng số thì đặc biệt, viết hoa hết và cách nhau bởi dấu gạch dưới DISCOUNT_PERCENT, LIMIT_RATE…
- Tên bảng, tên cột trong Database sử dụng underscore và sử dụng danh từ số nhiều, ví dụ bảng oauth_clients, oauth_refresh_tokens.

```
#### DOCS 
- Gợi ý code reactjs: https://github.com/airbnb/javascript/tree/master/react<br>

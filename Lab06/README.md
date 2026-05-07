# Lab06 - Xây dựng Frontend với ReactJS (tt)

## Thông tin sinh viên
- **Họ tên:** Trần Duy Nhân
- **MSSV:** 23521089
- **Lớp:** IE213.Q21

## Môn học
IE213 - Kỹ thuật phát triển hệ thống web

## Mục tiêu bài thực hành
- Thêm/Xoá/Sửa review từ Frontend
- Lấy dữ liệu movie theo từng trang (pagination)
- Tìm kiếm phim theo Title và Rating
- Quản lý trạng thái đăng nhập (Login/Logout)

## Công cụ / Môi trường sử dụng
- ReactJS (Create React App)
- React Bootstrap
- Axios (HTTP Client)
- React Router DOM (Routing)
- LocalStorage (Persist login state)
- Node.js + Express + MongoDB (Backend từ Lab04/Lab05)

## Cách chạy chương trình

### 1. Backend (sử dụng từ Lab04/Lab05)
```bash
cd Lab05/backend   # hoặc Lab04/backend
npm install
npm start
```
Backend chạy tại `http://localhost:80`

### 2. Frontend Lab06
```bash
cd Lab06/frontend
npm install
npm start
```
Frontend chạy tại `http://localhost:3000`

### 3. Truy cập
Mở trình duyệt và truy cập: `http://localhost:3000`

## Kết quả đầu ra

### 1. Login Component
- Form đăng nhập với 2 fields: **Username** và **ID**
- Lưu trạng thái đăng nhập vào `localStorage` (không bị mất khi F5)
- Sau khi login thành công → redirect về trang chủ
- Navbar hiển thị "Logout [tên user]" thay vì "Login"

### 2. Thêm Review (Create Review)
- Chỉ hiển thị nút "Add Review" khi đã đăng nhập
- Form thêm review với trường review text
- Gọi API `MovieDataService.createReview(data)`
- Backend: `apiPostReview()` trong ReviewsController

### 3. Sửa Review (Edit Review)
- Hiển thị nút "Edit" dưới review (chỉ cho review của chính user đó)
- Truyền `currentReview` qua `location.state`
- Nếu `editing = true` → điền sẵn nội dung cũ vào form
- Gọi API `MovieDataService.updateReview(data)`
- Backend: `apiUpdateReview()` trong ReviewsController

### 4. Xoá Review (Delete Review)
- Hiển thị nút "Delete" dưới review (chỉ cho review của chính user đó)
- Gọi `MovieDataService.deleteReview(reviewId, userId)`
- Xoá review khỏi state bằng `splice(index, 1)`
- Backend: xoá review khỏi database

### 5. Phân trang (Pagination)
- State: `currentPage`, `entriesPerPage`
- Gọi API `MovieDataService.getAll(currentPage)`
- Nút "Get next X results" để load trang tiếp theo
- useEffect theo dõi `currentPage` thay đổi

### 6. Tìm kiếm theo Title (findByTitle)
- Nhập tiêu đề vào ô "Search by title"
- State: `currentSearchMode = "findByTitle"`
- Gọi API `MovieDataService.find(query, "title", currentPage)`

### 7. Tìm kiếm theo Rating (findByRating)
- Chọn rating từ dropdown
- State: `currentSearchMode = "findByRating"`
- Gọi API `MovieDataService.find(query, "rated", currentPage)`
- Chọn "All Ratings" → hiển thị lại tất cả phim

## Giải thích ngắn gọn phần chính đã thực hiện

### Login State Management
Sử dụng `localStorage` để persist trạng thái đăng nhập:
```javascript
const [user, setUser] = React.useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
});
```

### AddReview Component (Edit/Create)
- Kiểm tra `props.location.state.currentReview` để xác định chế độ editing
- Nếu editing: gọi `updateReview()`, ngược lại gọi `createReview()`

### Pagination Logic
- `currentPage` state được truyền vào API call
- Khi bấm "Get next X results" → tăng `currentPage` → useEffect trigger lại API call

### Search Mode Switching
- State `currentSearchMode` theo dõi loại tìm kiếm
- `useEffect` theo dõi `currentSearchMode` → reset `currentPage` về 0
- `retrieveNextPage()` kiểm tra mode và gọi hàm tương ứng

### Delete Review
- Truyền `review._id` và `index` vào hàm `deleteReview()`
- Sau khi API thành công → `splice(index, 1)` để cập nhật UI ngay

## Những nội dung đã hoàn thành
- [x] Tạo Login component với name và ID
- [x] Thêm review mới (createReview)
- [x] Sửa review hiện có (updateReview)
- [x] Xoá review (deleteReview)
- [x] Phân trang với currentPage và entriesPerPage
- [x] Tìm kiếm theo Title (findByTitle)
- [x] Tìm kiếm theo Rating (findByRating)
- [x] Quản lý trạng thái user (login/logout + localStorage)



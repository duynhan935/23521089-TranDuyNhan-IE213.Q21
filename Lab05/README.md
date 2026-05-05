# Lab05 - Xây dựng Frontend với ReactJS (Movie Reviews)

## Thông tin sinh viên
- **Họ tên:** Trần Duy Nhân
- **MSSV:** 23521089
- **Lớp:** IE213.Q21

## Môn học
IE213 - Kỹ thuật phát triển hệ thống Web

## Mục tiêu bài thực hành
- Hiểu cách kết nối từ Frontend (ReactJS) đến Backend
- Sử dụng các package chính trong phát triển mã nguồn FE (axios, react-bootstrap, react-router-dom)
- Tạo các form để người dùng nhập vào tìm kiếm dữ liệu
- Hiển thị danh sách movie thông qua các component của React-bootstrap (Card, Link, Switch, Route)
- Sử dụng các hook useState() và useEffect() trong ReactJS
- Hiển thị trang chi tiết về Movie (ứng dụng minh họa)
- Hiển thị các review có liên quan đến Movie
- Sử dụng moment.js để định dạng thời gian

## Các bài thực hiện

### Bài 1: Kết nối tới Backend
- Cài đặt axios cho dự án hiện tại
- Tạo lớp dịch vụ MovieDataService trong `src/services/movies.js`
- Tạo các lời gọi dịch vụ tới backend sử dụng axios:
  - `getAll()` - Lấy tất cả movies
  - `get(id)` - Lấy chi tiết movie theo id
  - `find(query, by)` - Tìm kiếm movie theo title hoặc rating
  - `createReview(data)` - Thêm review mới
  - `updateReview(data)` - Cập nhật review
  - `deleteReview(id, userId)` - Xóa review
  - `getRatings()` - Lấy danh sách các loại rating

### Bài 2: Xây dựng MoviesList Component
- Tạo các biến trạng thái: movies, searchTitle, searchRating, ratings sử dụng useState()
- Tạo 2 phương thức `retrieveMovies()` và `retrieveRatings()` để lấy thông tin
- Sử dụng useEffect() để gọi khi component mount
- Tạo 2 search form: tìm theo title và tìm theo rating
- Hiển thị các movie bằng `<Card>` của React-bootstrap
- Thực hiện tìm kiếm theo Title và Rating

### Bài 3: Hiển thị thông tin trang Movie
- Tạo component Movie trong `src/components/movie.js`
- Biến trạng thái movie lưu trữ thông tin chi tiết (id, title, rated, reviews)
- Phương thức `getMovie()` gọi MovieDataService.get()
- Hiển thị poster, title, plot, rating
- Link để thêm review (chỉ hiển thị khi đã login)

### Bài 4: Hiển thị danh sách review
- Hiển thị danh sách review tương ứng cho từng phim dưới phần Plot
- Sử dụng moment.js để định dạng thời gian review
- Thêm review thông qua form AddReview

## Công cụ / Môi trường sử dụng
- **ReactJS:** ^19.2.5
- **react-bootstrap:** ^2.10.10
- **react-router-dom:** ^5.3.4
- **axios:** Để gọi API tới backend
- **moment:** Để định dạng thời gian
- **Bootstrap:** ^5.3.8

## Cách chạy chương trình

### Yêu cầu hệ thống
- Node.js đã được cài đặt
- Backend (Lab03) đang chạy tại `http://localhost:80`

### Các bước chạy
```bash
# Di chuyển vào thư mục frontend
cd Lab05/frontend

# Cài đặt dependencies (nếu chưa cài)
npm install

# Khởi động ứng dụng
npm start
```

Mở trình duyệt tại `http://localhost:3000`

## Kết quả đầu ra
1. **Trang chủ:** Hiển thị danh sách tất cả movies dưới dạng Card
2. **Tìm kiếm:** Có thể tìm theo Title hoặc filter theo Rating
3. **Chi tiết Movie:** Nhấn "View Reviews" để xem chi tiết phim và danh sách review
4. **Đăng nhập:** Click "Login" để đăng nhập (nhập tên)
5. **Thêm Review:** Sau khi đăng nhập, có thể thêm review cho phim

## Cấu trúc thư mục
```
Lab05/
├── README.md
├── screenshots/
└── frontend/
    ├── package.json
    └── src/
        ├── App.js
        ├── services/
        │   └── movies.js
        └── components/
            ├── movies-list.js
            ├── movie.js
            ├── add-review.js
            └── login.js
```

## Những nội dung đã hoàn thành
- [x] Bài 1: Kết nối tới Backend với axios
- [x] Bài 2: Xây dựng MoviesList với search và filter
- [x] Bài 3: Hiển thị trang chi tiết Movie
- [x] Bài 4: Hiển thị danh sách review với moment.js
- [x] Navigation Navbar với login/logout
- [x] Routing với react-router-dom v5

## Ghi chú
- Backend phải được khởi động trước tại `http://localhost:80`
- Các API endpoints phải tương thích với Lab03 backend
- Để test thêm review, cần đăng nhập trước

## AI Support
- **Công cụ sử dụng:** Claude AI (Anthropic)
- **Mục đích:** Hỗ trợ xây dựng mã nguồn frontend, giải thích cách sử dụng React hooks, axios, và react-bootstrap components
- **Phần được hỗ trợ:** Cấu trúc component, tích hợp API, và debug các vấn đề về routing

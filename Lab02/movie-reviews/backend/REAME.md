# Lab 02: Thiết lập Backend với Node|ExpressJS

## Mục tiêu

Hoàn thành việc thiết lập môi trường Backend sử dụng Node.js và ExpressJS, đồng thời kết nối thành công với cơ sở dữ liệu MongoDB Atlas (sample_mflix).

## Cấu trúc thư mục

- `backend/server.js`: Khởi tạo máy chủ Express, thiết lập middleware (CORS, JSON) và định tuyến cơ bản.
- `backend/index.js`: Điểm neo khởi chạy ứng dụng, kết nối cơ sở dữ liệu MongoDB và khởi động server.
- `backend/dao/moviesDAO.js`: Chứa Data Access Object xử lý truy vấn trực tiếp tới collection `movies`.
- `backend/api/movies.controller.js`: Tiếp nhận request, gọi DAO và trả về kết quả JSON.
- `backend/api/movies.route.js`: Định tuyến endpoint `/api/v1/movies`.

## Hướng dẫn chạy dự án

1. Mở terminal tại thư mục `backend/`
2. Chạy lệnh `npm install` để cài đặt các dependency.
3. Tạo file `.env` ngang hàng với `server.js` và cấu hình các biến:
    - `MOVIEREVIEWS_DB_URI=mongodb+srv://<username>:<password>@<cluster-url>/`
    - `MOVIEREVIEWS_NS=sample_mflix`
    - `PORT=3000`
4. Chạy lệnh `npm run dev` để khởi động máy chủ bằng nodemon.

## Kết quả đạt được

Ứng dụng đã chạy thành công trên cổng 3000. Khi gọi GET request tới `http://localhost:3000/api/v1/movies/`, máy chủ trả về chính xác cấu trúc JSON chứa danh sách phim (`movies`), `page`, `filters`, `entries_per_page`, và `total_results`.

import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const AccountPage: React.FC = () => {
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUsername] = React.useState("phuongbmph 30949");
  const [dob, setDob] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleCurrentPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleDobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDob(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted!");
  };

  return (
    <Grid container spacing={2} sx={{ my: "30px" }}>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            padding: 2,
            border: "1px solid #ddd",
            borderRadius: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Tài khoản của tôi
          </Typography>
          <Button fullWidth variant="outlined" size="small" sx={{ mb: 1 }}>
            Thông tin cá nhân
          </Button>
          <Button fullWidth variant="outlined" size="small" sx={{ mb: 1 }}>
            Sổ địa chỉ
          </Button>
          <Button fullWidth variant="outlined" size="small" sx={{ mb: 1 }}>
            Đơn hàng của tôi
          </Button>
          <Button fullWidth variant="outlined" size="small" sx={{ mb: 1 }}>
            Điểm tích lũy
          </Button>
          <Button fullWidth variant="outlined" size="small" sx={{ mb: 1 }}>
            Yêu cầu hỗ trợ
          </Button>
          <Button fullWidth variant="outlined" size="small" sx={{ mb: 1 }}>
            Đăng ký bản tin
          </Button>
          <Button fullWidth variant="outlined" size="small" sx={{ mb: 1 }}>
            Cộng tác viên
          </Button>
          <Button fullWidth variant="outlined" size="small" sx={{ mb: 1 }}>
            Sản phẩm NFT
          </Button>
          <Button fullWidth variant="outlined" size="small" sx={{ mb: 1 }}>
            Danh sách yêu thích
          </Button>
          <Button fullWidth variant="outlined" size="small">
            Cửa hàng
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            padding: 2,
            border: "1px solid #ddd",
            borderRadius: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            CHỈNH SỬA THÔNG TIN CÁ NHÂN
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>
                  Thông tin tài khoản
                </Typography>
                <TextField
                  label="Tên tài khoản"
                  value={username}
                  onChange={handleUsernameChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  type="date"
                  value={dob}
                  onChange={handleDobChange}
                  fullWidth
                  margin="normal"
                />
                <FormControl fullWidth margin="normal">
                  <InputLabel>Giới tính</InputLabel>
                  <Select value={gender} onChange={handleGenderChange}>
                    <MenuItem value="male">Nam</MenuItem>
                    <MenuItem value="female">Nữ</MenuItem>
                    <MenuItem value="other">Khác</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  fullWidth
                  margin="normal"
                />

                <StyledButton type="submit" variant="contained" fullWidth>
                  Hoàn thành
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>
                  Thay đổi mật khẩu
                </Typography>
                <TextField
                  label="Mật khẩu hiện tại"
                  type={showPassword ? "text" : "password"}
                  value={currentPassword}
                  onChange={handleCurrentPasswordChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Mật khẩu mới"
                  type={showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  fullWidth
                  margin="normal"
                />
                <FormHelperText>
                  Độ mạnh của mật khẩu: Không có mật khẩu
                </FormHelperText>
                <TextField
                  label="Xác nhận mật khẩu mới"
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  fullWidth
                  margin="normal"
                />
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <Checkbox
                    checked={showPassword}
                    onChange={handleShowPasswordChange}
                  />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    Hiển thị mật khẩu
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AccountPage;

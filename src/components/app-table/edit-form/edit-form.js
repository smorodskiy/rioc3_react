import styled from "@emotion/styled";
import { Box, Button, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AppBreadcrumbs from "../../breadcrumbs/breadcrumbs";

const InputField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "green",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
});

export default function EditForm() {
  return (
    <Box>
      {/* переходы */}
      <AppBreadcrumbs />

      <Box sx={{ boxShadow: 1, px: 8, py: 8 }}>
        <Typography sx={{ marginBottom: 3 }} variant="h6" id="editFormTitle" component="div">
          {/* здесь можно что-то добавить если нет выделнных элементов */}
          Додати обладнання
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
            marginBottom: 3,
          }}
        >
          <InputField label="IP адреса" required variant="outlined" defaultValue="" id="ip-input" />
          <InputField
            label="Мережа"
            required
            variant="outlined"
            defaultValue=""
            id="network-input"
          />
          <InputField label="Маска" required variant="outlined" defaultValue="" id="mask-input" />
          <InputField
            label="Префикс"
            required
            variant="outlined"
            defaultValue=""
            id="prefix-input"
          />
          <InputField
            label="Робоче місце"
            required
            variant="outlined"
            defaultValue=""
            id="workplace-input"
          />
          <InputField label="Розташування" variant="outlined" defaultValue="" id="place-input" />
          <InputField label="MAC" variant="outlined" defaultValue="" id="-input" />
          <InputField
            label="Тип обладнання"
            required
            variant="outlined"
            defaultValue=""
            id="eqip-input"
          />
        </Box>
        <Box sx={{ display: "flex", gap: 3, justifyContent: "center" }}>
          <Button sx={{ width: 200 }} size="large" variant="outlined" startIcon={<DeleteIcon />}>
            Очистити
          </Button>
          <Button sx={{ width: 200 }} size="large" variant="contained" endIcon={<SendIcon />}>
            Зберегти
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

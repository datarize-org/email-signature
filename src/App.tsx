import {
  DtrBox,
  DtrDropdown,
  DtrTextField,
  DtrTypo,
} from "@datarize-org/design-library"

import { useDropdown, useTextfield } from "@datarize-org/design-library/hooks"

function App() {
  const DROPDOWN_OPTIONS = [
    { id: "CEO", name: "CEO", item: "CEO" },
    { id: "COO", name: "COO", item: "COO" },
    { id: "CSO", name: "CSO", item: "CSO" },
    { id: "CTO", name: "CTO", item: "CTO" },
    { id: "Data Analyst", name: "Data Analyst", item: "Data Analyst" },
    { id: "Data Engineer", name: "Data Engineer", item: "Data Engineer" },
    { id: "Data Scientist", name: "Data Scientist", item: "Data Scientist" },
    {
      id: "Product Designer",
      name: "Product Designer",
      item: "Product Designer",
    },
    { id: "BX Designer", name: "BX Designer", item: "BX Designer" },
    {
      id: "Back-End Engineer",
      name: "Back-End Engineer",
      item: "Back-End Engineer",
    },
    {
      id: "Front-End Engineer",
      name: "Front-End Engineer",
      item: "Front-End Engineer",
    },
    { id: "Product Manager", name: "Product Manager", item: "Product Manager" },
    { id: "QA Manager", name: "QA Manager", item: "QA Manager" },
    { id: "CX Manager", name: "CX Manager", item: "CX Manager" },
    { id: "Account Manager", name: "Account Manager", item: "Account Manager" },
    { id: "Finance Manager", name: "Finance Manager", item: "Finance Manager" },
    { id: "HR&GA Manager", name: "HR&GA Manager", item: "HR&GA Manager" },
    {
      id: "Design Chapter Lead",
      name: "Design Chapter Lead",
      item: "Design Chapter Lead",
    },
    {
      id: "Service Chapter Lead",
      name: "Service Chapter Lead",
      item: "Service Chapter Lead",
    },
    {
      id: "Front-End Chapter Lead",
      name: "Front-End Chapter Lead",
      item: "Front-End Chapter Lead",
    },
    {
      id: "Back-End Chapter Lead",
      name: "Back-End Chapter Lead",
      item: "Back-End Chapter Lead",
    },
    {
      id: "Strategic Business Lead",
      name: "Strategic Business Lead",
      item: "Strategic Business Lead",
    },
    {
      id: "Corporate Strategy Head",
      name: "Corporate Strategy Head",
      item: "Corporate Strategy Head",
    },
  ]

  const engFirstNameHook = useTextfield({ initialValue: "" })
  const engLastNameHook = useTextfield({ initialValue: "" })
  const korNameHook = useTextfield({ initialValue: "" })
  const phoneNumberHook = useTextfield({ initialValue: "" })
  const emailHook = useTextfield({ initialValue: "" })

  const dropdownHook = useDropdown({
    value: DROPDOWN_OPTIONS[0],
    options: DROPDOWN_OPTIONS,
  })

  const dropDownProps = {
    targetRef: dropdownHook.selectBoxRef,
    selected: dropdownHook.selected,
    onSelect: dropdownHook.onSelect,
    isOpen: dropdownHook.isOpen,
    currentOptions: dropdownHook.currentOptions,
    onSelectOption: dropdownHook.onSelectOption,
  }

  const changePhoneNumber = (phone: string) => {
    const cleanPhoneString = ("" + phone).replace(/\D/g, "")
    let result = ""
    if (cleanPhoneString.length === 0) {
      return result
    }

    if (cleanPhoneString[0] === "0") {
      result = "+82."
    }
    // 010
    if (cleanPhoneString.length < 4) {
      result = result + cleanPhoneString.substring(1)
      return result
    }
    // 0100000
    if (cleanPhoneString.length < 8) {
      result =
        result +
        cleanPhoneString.substring(1, 3) +
        "." +
        cleanPhoneString.substring(3)
      return result
    }

    result =
      result +
      cleanPhoneString.substring(1, 3) +
      "." +
      cleanPhoneString.substring(3, 7) +
      "." +
      cleanPhoneString.substring(7)
    return result
  }

  return (
    <DtrBox _display="flex" flow="column" pd="8px" align="center">
      <DtrTypo _type="header6" weight="medium" _color="brand_black_1100">
        이메일 서명 만들기
      </DtrTypo>
      <DtrBox _width="500px" _display="flex" flow="column" pd="16px">
        <DtrBox _display="flex" gap="8px" align="center start">
          <DtrTextField
            type="text"
            name="engFirstName"
            id="engFirstName"
            _size="large"
            label="First Name"
            value={engFirstNameHook.value}
            onChange={engFirstNameHook.changeValue}
          />
          <DtrTextField
            type="text"
            name="engLastName"
            id="engLastName"
            _size="large"
            label="Last Name"
            value={engLastNameHook.value}
            onChange={engLastNameHook.changeValue}
          />
        </DtrBox>
        <DtrBox mt="16px" _display="flex" gap="8px" align="center start">
          <DtrBox _display="flex" align="start start" _width="230px">
            <DtrTextField
              type="text"
              name="korName"
              id="korName"
              _size="large"
              label="이름"
              value={korNameHook.value}
              onChange={korNameHook.changeValue}
            />
          </DtrBox>
          <DtrBox
            _display="flex"
            gap="8px"
            flow="column"
            align="start start"
            _width="230px"
          >
            <DtrTypo
              _type="subtitle4"
              weight="regular"
              _color="brand_black_1000"
            >
              직책
            </DtrTypo>
            <DtrDropdown _size="large" maxHeight={390} {...dropDownProps} />
          </DtrBox>
        </DtrBox>
        <DtrBox mt="16px" _display="flex" gap="8px" align="center start">
          <DtrTextField
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            _size="large"
            label="전화번호"
            value={phoneNumberHook.value}
            onChange={phoneNumberHook.changeValue}
            maxLength={13}
          />
          <DtrTextField
            type="text"
            name="email"
            id="email"
            _size="large"
            label="email"
            value={emailHook.value}
            onChange={emailHook.changeValue}
          />
        </DtrBox>
      </DtrBox>
      <DtrBox
        _width="500px"
        _height="400px"
        _display="flex"
        flow="column"
        pd="16px"
      >
        <DtrTypo _type="subtitle4" weight="regular" _color="brand_black_1000">
          결과 (아래 내용을 복사해서 메일 서명에 붙여 넣으세요)
        </DtrTypo>
        <DtrBox bd="1px solid brand_black_300" pd="24px">
          <div>
            <div style={{ fontFamily: '"arial", sans-serif' }}>
              <p style={{ margin: 0, fontSize: "14px" }}>
                <strong>{`${engFirstNameHook.value || "-"} ${
                  engLastNameHook.value || "-"
                } ${korNameHook.value || "-"}`}</strong>
              </p>
              <p style={{ margin: 0, fontSize: "14px" }}>
                <strong>{`${dropdownHook.selected.item}`}</strong>
              </p>
              <p style={{ margin: 0, fontSize: "13px", marginTop: "2px" }}>
                <strong>M.</strong>{" "}
                {`${changePhoneNumber(phoneNumberHook.value) || "-"}`}
              </p>
              <p style={{ margin: 0, fontSize: "13px", marginTop: "2px" }}>
                <strong>E.</strong> {`${emailHook.value || "-"}`}
              </p>
              <br />
              <p style={{ margin: 0, fontSize: "13px" }}>
                <strong>Datarize | Data is Easy!</strong>
              </p>
              <p style={{ margin: 0, fontSize: "13px", marginTop: "2px" }}>
                서울특별시 강남구 도곡로 205 YK빌딩 6층
              </p>
              <p style={{ margin: 0, fontSize: "13px", marginTop: "2px" }}>
                https://datarize.ai
              </p>
            </div>

            <img
              alt=""
              src="https://dtr-assets.s3.ap-northeast-2.amazonaws.com/email/signature.png"
              style={{
                width: "420px",
                objectFit: "contain",
                marginTop: "24px",
              }}
            />
          </div>
        </DtrBox>
      </DtrBox>
    </DtrBox>
  )
}

export default App

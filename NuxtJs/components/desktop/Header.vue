<template>
  <div class="desktop-header-block">
    <div class="header-desktop">
      <div class="header-desktop-left-column">
        <div class="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <g clip-path="url(#clip0_4218_7445)">
              <path
                d="M12.1618 13.5908L25.4063 0.888916H6.68655C5.98811 0.88981 5.29405 0.999125 4.62915 1.21296L9.73921 13.0996C9.8353 13.3227 9.98398 13.5192 10.1725 13.6723C10.3611 13.8254 10.5839 13.9306 10.822 13.9789C11.0601 14.0272 11.3063 14.0171 11.5396 13.9495C11.7729 13.8819 11.9864 13.7588 12.1618 13.5908Z"
                fill="#EC1F25"
              />
              <path
                d="M19.8641 13.5187L34.2222 18.4282V7.57544C34.2222 6.15299 33.7686 4.7676 32.9274 3.6206C32.0861 2.47361 30.9009 1.62479 29.5442 1.19751L19.3112 11.0113C19.1253 11.1899 18.9885 11.4132 18.9137 11.6599C18.839 11.9066 18.8289 12.1684 18.8844 12.4201C18.9399 12.6718 19.0592 12.905 19.2307 13.0974C19.4023 13.2898 19.6204 13.4349 19.8641 13.5187Z"
                fill="#EC1F25"
              />
              <path
                d="M1.96996 2.84094C1.3454 3.46107 0.849784 4.19871 0.511679 5.0113C0.173574 5.8239 -0.000327833 6.69539 4.63959e-07 7.57553L4.6396e-07 28.4067C4.6396e-07 30.18 0.704473 31.8808 1.95844 33.1348C3.21241 34.3887 4.91316 35.0932 6.68654 35.0932H15.8445L1.96996 2.84094Z"
                fill="#EC1F25"
              />
              <path
                d="M14.178 15.9337L12.8587 17.199C12.5765 17.4698 12.3838 17.8203 12.3061 18.2035C12.2284 18.5868 12.2696 18.9846 12.424 19.3439L19.2032 35.1113H27.5305C29.3039 35.1113 31.0046 34.4068 32.2586 33.1528C33.5125 31.8988 34.217 30.1981 34.217 28.4247V21.6893L16.1274 15.5017C15.794 15.3884 15.4359 15.3688 15.0922 15.445C14.7485 15.5212 14.4323 15.6902 14.178 15.9337Z"
                fill="#EC1F25"
              />
            </g>
            <defs>
              <clipPath id="clip0_4218_7445">
                <rect
                  width="34.2222"
                  height="34.2222"
                  fill="white"
                  transform="translate(0 0.888916)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Karo</span>
        </div>
        <div class="header-line"></div>
        <div class="menu-items-list">
          <div class="font-menu-items">Trang chủ</div>
          <div
            class="menu-item font-menu-items"
            @click.prevent="ShowDropdown(1)"
          >
            Mua nhà
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1.6665 1.66663L6.33317 6.33329L10.9998 1.66663"
                  stroke="#000929"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <div v-if="isShow(1)" class="dropdown-menu">
              <div v-for="(menuItem, index) in dataMenu" :key="index">
                <div @click.prevent="chooseMenu(menuItem)">
                  {{ menuItem.name }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="menu-item font-menu-items"
            @click.prevent="ShowDropdown(2)"
          >
            Thuê nhà
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1.6665 1.66663L6.33317 6.33329L10.9998 1.66663"
                  stroke="#000929"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <div v-if="isShow(2)" class="dropdown-menu">
              <div v-for="(menuItem, index) in dataMenu" :key="index">
                <div @click.prevent="chooseMenu(menuItem)">
                  {{ menuItem.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="font-menu-items">Giới thiệu</div>
        </div>
      </div>
      <div v-if="!login" class="header-desktop-right-column">
        <div class="deposit-btn">Ký gửi nhà</div>
        <div class="login-btn">Đăng nhập</div>
      </div>
      <div v-else class="header-desktop-right-column">
        <div class="manage-btn">Quản lý</div>
        <div class="notify-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <g clip-path="url(#clip0_3362_13710)">
              <path
                d="M21.3679 16.4943C20.8115 15.5366 20.1482 13.7192 20.1482 10.5V9.83469C20.1482 5.68296 16.8176 2.28058 12.7236 2.25019C12.7045 2.25009 12.6855 2.25 12.6664 2.25C10.6798 2.25258 8.77563 3.0442 7.37273 4.45072C5.96982 5.85723 5.18309 7.76344 5.1856 9.75V10.5C5.1856 13.719 4.52193 15.5363 3.96529 16.494C3.83233 16.7217 3.76178 16.9805 3.76075 17.2443C3.75972 17.508 3.82825 17.7673 3.95943 17.9961C4.09061 18.2249 4.27979 18.4151 4.50791 18.5475C4.73603 18.6798 4.99502 18.7497 5.25875 18.75H8.91656C8.91656 19.7446 9.31165 20.6984 10.0149 21.4017C10.7182 22.1049 11.672 22.5 12.6666 22.5C13.6611 22.5 14.6149 22.1049 15.3182 21.4017C16.0215 20.6984 16.4166 19.7446 16.4166 18.75H20.0744C20.3381 18.7497 20.597 18.6798 20.8251 18.5475C21.0532 18.4152 21.2424 18.2251 21.3735 17.9963C21.5047 17.7675 21.5733 17.5083 21.5723 17.2446C21.5713 16.9809 21.5008 16.7221 21.3679 16.4943ZM12.6666 21C12.07 20.9993 11.4981 20.7621 11.0763 20.3402C10.6545 19.9184 10.4172 19.3465 10.4166 18.75H14.9166C14.9159 19.3465 14.6786 19.9184 14.2568 20.3402C13.835 20.7621 13.2631 20.9993 12.6666 21Z"
                fill="#000929"
              />
            </g>
            <defs>
              <clipPath id="clip0_3362_13710">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.666504)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="user-info">
          <img src="../../static/img/Rectangle 111.png" alt="" />
          <span v-if="$auth.user">{{ $auth.user.fullname }}</span>
          <span v-else>Manh</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1.6665 1.66663L6.33317 6.33329L10.9998 1.66663"
              stroke="#000929"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div @click.prevent="logout">logout</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeDropdown: null,
      login: true,
    };
  },

  props: {
    dataMenu: {
      type: [],
    },
    quickView: {
      type: Boolean,
    }
  },

  mounted() {
    console.log(this.$auth.strategy.token.get())
  },

  methods: {
    ShowDropdown(dropdownItem) {
      this.activeDropdown =
        this.activeDropdown === dropdownItem ? null : dropdownItem;
    },

    isShow(dropdownItem) {
      return this.activeDropdown === dropdownItem;
    },

    chooseMenu(menuItem) {
      if (this.quickView) {
        this.$emit("event-choose-menu", menuItem);
      }
    },
    async logout() {
      try {
        await this.$auth.logout()
        window.location.href = '/'
      } catch (error) {
        console.error('Error checking login status:', error)
      }
    },

  },
};
</script>

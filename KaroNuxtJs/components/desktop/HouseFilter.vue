<template>
  <div class="house-type-search">
    <h3>Khám phá kho nhà</h3>
    <div class="house-filter-search">
      <div class="dropdown-select">
        <a class="input-select" @click.prevent="ShowDropdown(1)">
          <div class="input-type">
            <p>Khu vực hoặc dự án</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <g clip-path="url(#clip0_170_7410)">
                  <path
                    d="M2.5 4.75L6 8.25L9.5 4.75"
                    stroke="#000929"
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_170_7410">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <strong>Tất cả</strong>
          <div v-if="isShow(1)" class="dropdown-menu search-type">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M16.5002 16.9999L11.7422 12.2419"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 14C10.8137 14 13.5 11.3137 13.5 8C13.5 4.68629 10.8137 2 7.5 2C4.18629 2 1.5 4.68629 1.5 8C1.5 11.3137 4.18629 14 7.5 14Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Tìm kiếm theo khu vực hoặc dự án..."
            />
          </div>
        </a>
        <hr />
        <a class="input-select" @click.prevent="ShowDropdown(2)">
          <div class="input-type">
            <p>Loại hình ký gửi</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <g clip-path="url(#clip0_170_7410)">
                  <path
                    d="M2.5 4.75L6 8.25L9.5 4.75"
                    stroke="#000929"
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_170_7410">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <strong>{{ selectedValue }}</strong>
          <div v-if="isShow(2)" class="dropdown-menu">
            <div v-for="(menuItem, index) in dataMenu" :key="index">
              <div
                class="dropdown-menu-item"
                @click.prevent="selectMenuItem(menuItem)"
              >
                {{ menuItem.name }}
              </div>
            </div>
          </div>
        </a>
        <hr />
        <a class="input-select">
          <div class="input-type">
            <p>Loại hình BĐS</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <g clip-path="url(#clip0_170_7410)">
                  <path
                    d="M2.5 4.75L6 8.25L9.5 4.75"
                    stroke="#000929"
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_170_7410">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <strong>Tất cả</strong>
        </a>
        <hr />
        <a class="input-select">
          <div class="input-type">
            <p>Diện tích</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <g clip-path="url(#clip0_170_7410)">
                  <path
                    d="M2.5 4.75L6 8.25L9.5 4.75"
                    stroke="#000929"
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_170_7410">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <strong>Tất cả</strong>
        </a>
        <hr />
        <a class="input-select">
          <div class="input-type">
            <p>Giá</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <g clip-path="url(#clip0_170_7410)">
                  <path
                    d="M2.5 4.75L6 8.25L9.5 4.75"
                    stroke="#000929"
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_170_7410">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <strong>Tất cả</strong>
        </a>
      </div>
      <div class="filter-btns">
        <a class="filter-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 22L20 20"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Tìm kiếm</p>
        </a>
        <a class="advanced-filter-btn">
          <p>Tìm nâng cao</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M9 15H7C6.448 15 6 14.552 6 14C6 13.448 6.448 13 7 13H9C9.552 13 10 13.448 10 14C10 14.552 9.552 15 9 15Z"
              fill="white"
            />
            <path
              d="M11 11H5C4.448 11 4 10.552 4 10C4 9.448 4.448 9 5 9H11C11.552 9 12 9.448 12 10C12 10.552 11.552 11 11 11Z"
              fill="white"
            />
            <path
              d="M13 7H3C2.448 7 2 6.552 2 6C2 5.448 2.448 5 3 5H13C13.552 5 14 5.448 14 6C14 6.552 13.552 7 13 7Z"
              fill="white"
            />
            <path
              d="M15 3H1C0.448 3 0 2.552 0 2C0 1.448 0.448 1 1 1H15C15.552 1 16 1.448 16 2C16 2.552 15.552 3 15 3Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeDropdown: null,
      selectedValue: "Tất cả",
    };
  },

  props: {
    dataMenu: {
      type: [],
    },
    quickView: {
      type: Boolean,
    },
  },

  methods: {
    ShowDropdown(index) {
      this.activeDropdown = this.activeDropdown === index ? null : index;
    },

    isShow(index) {
      return this.activeDropdown === index;
    },

    selectMenuItem(menuItem) {
      this.selectedValue = menuItem.name;
    },
  },
};
</script>

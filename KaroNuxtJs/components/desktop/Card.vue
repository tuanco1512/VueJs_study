<template>
  <div class="card-deal card-sell success">
    <div class="mask-group">
      <nuxt-link :to="`/detail/${item.id}`"
        ><img
          class="card-deal-img"
          src="https://s3-alpha-sig.figma.com/img/8bdd/75fa/b6e169b8c868d5bd503f3591099382ce?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hB22mf5j-qN7KZ92~cB3YNPTQgu1AAsFTFZU1b4BiW94eA9VXRkebjzugI-PZkQCe35OMwWuEFMJbAUmiRv8bttfaTjG7jQKxzEHuf7stFrWMMZ-ZM5OM5sBRjMtemK6WerIaIvN5XTYJa0dVfX3p-QR6BXoRrZFWupEWOQL-W6Egz6~TlenV0Ao2LGNQnW4m45mJitFe1e-tKBHYXpp76Fd4y3hwmCRYIhDqF6AgJp7~Q73X-c7OUi7MVYC9jNZmJf2IxKd~J0EIsvH9kZj~O9k8~rLmV9W4QvPgoAXSeI79r40ZzMhePMYeS2D9U1-Npe6ija1jfTPIgLe0lOPkA__"
          alt=""
      /></nuxt-link>
      <div class="like-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M3.59834 5.26499C3.25011 5.61321 2.97388 6.02661 2.78543 6.48158C2.59697 6.93656 2.49997 7.4242 2.49997 7.91666C2.49997 8.40912 2.59697 8.89676 2.78543 9.35173C2.97388 9.80671 3.25011 10.2201 3.59834 10.5683L10 16.97L16.4017 10.5683C17.1049 9.86506 17.5 8.91123 17.5 7.91666C17.5 6.92209 17.1049 5.96826 16.4017 5.26499C15.6984 4.56173 14.7446 4.16664 13.75 4.16664C12.7554 4.16664 11.8016 4.56173 11.0983 5.26499L10 6.36333L8.90167 5.26499C8.55345 4.91677 8.14005 4.64054 7.68508 4.45208C7.2301 4.26362 6.74246 4.16663 6.25 4.16663C5.75754 4.16663 5.2699 4.26362 4.81493 4.45208C4.35995 4.64054 3.94656 4.91677 3.59834 5.26499V5.26499Z"
            stroke="#002051"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="sell-tag">
        <div class="sell-tag-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M7.64676 5.38672V7.29339L6.97342 7.06005C6.63342 6.94005 6.42676 6.82672 6.42676 6.24672C6.42676 5.77339 6.78009 5.38672 7.21342 5.38672H7.64676Z"
              fill="white"
            />
            <path
              d="M9.86679 9.75333C9.86679 10.2267 9.51346 10.6133 9.08012 10.6133H8.64679V8.70667L9.32012 8.94C9.66012 9.06 9.86679 9.17333 9.86679 9.75333Z"
              fill="white"
            />
            <path
              d="M10.9401 1.33337H5.35344C2.92677 1.33337 1.4801 2.78004 1.4801 5.20671V10.7934C1.4801 13.22 2.92677 14.6667 5.35344 14.6667H10.9401C13.3668 14.6667 14.8134 13.22 14.8134 10.7934V5.20671C14.8134 2.78004 13.3668 1.33337 10.9401 1.33337ZM9.65344 8.00004C10.1734 8.18004 10.8668 8.56004 10.8668 9.75337C10.8668 10.78 10.0668 11.6134 9.0801 11.6134H8.64677V12C8.64677 12.2734 8.4201 12.5 8.14677 12.5C7.87344 12.5 7.64677 12.2734 7.64677 12V11.6134H7.40677C6.31344 11.6134 5.42677 10.6867 5.42677 9.55337C5.42677 9.28004 5.64677 9.05337 5.92677 9.05337C6.2001 9.05337 6.42677 9.28004 6.42677 9.55337C6.42677 10.14 6.86677 10.6134 7.40677 10.6134H7.64677V8.35337L6.6401 8.00004C6.1201 7.82004 5.42677 7.44004 5.42677 6.24671C5.42677 5.22004 6.22677 4.38671 7.21344 4.38671H7.64677V4.00004C7.64677 3.72671 7.87344 3.50004 8.14677 3.50004C8.4201 3.50004 8.64677 3.72671 8.64677 4.00004V4.38671H8.88677C9.9801 4.38671 10.8668 5.31337 10.8668 6.44671C10.8668 6.72004 10.6468 6.94671 10.3668 6.94671C10.0934 6.94671 9.86677 6.72004 9.86677 6.44671C9.86677 5.86004 9.42677 5.38671 8.88677 5.38671H8.64677V7.64671L9.65344 8.00004Z"
              fill="white"
            />
          </svg>
          <p class="font-white">CẦN BÁN</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="8"
          viewBox="0 0 9 8"
          fill="none"
        >
          <path d="M8.07339 8L0 0H8.07339V8Z" fill="#CA0E14" />
        </svg>
      </div>
    </div>
    <div class="text">
      <div class="text-wrapper">
        <div class="text-area">
          <div class="price">
            <p class="font-red">{{ formatNumber(item.price) }}</p>
          </div>
          <nuxt-link :to="`/detail/${item.id}`" class="font-black">{{
            item.title
          }}</nuxt-link>
          <p class="font-light-grey">
            {{ item.full_address }}
          </p>
        </div>
        <div class="facilities">
          <div class="display-f">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_353_424)">
                <path
                  d="M19 9.4L10 1L1 9.4"
                  stroke="#FF5358"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.40002 10.6V19H8.20002V14.2H11.8V19H16.6V10.6"
                  stroke="#FF5358"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_353_424">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p class="font-grey">Nhà đất</p>
          </div>
          <div class="display-f">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_353_430)">
                <path
                  d="M1 10.8182H9.18182V19.0001"
                  stroke="#FF5358"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                />
                <path
                  d="M19 1H1V19H19V1Z"
                  stroke="#FF5358"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                />
              </g>
              <defs>
                <clipPath id="clip0_353_430">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p class="font-grey">33m²</p>
          </div>
          <div class="display-f">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M2 11.8478H18.6667"
                stroke="#FF5358"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
              <path
                d="M2 14.8796H18.6667"
                stroke="#FF5358"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
              <path
                d="M16.3939 2H4.27274V6.54546H16.3939V2Z"
                stroke="#FF5358"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
              <path
                d="M18.6659 17.1516V11.8486L16.3932 6.54553"
                stroke="#FF5358"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
              <path
                d="M4.27273 6.54553L2 11.8486V17.1516"
                stroke="#FF5358"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
            </svg>
            <p class="font-grey">4</p>
          </div>
          <div class="display-f">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.878 11.0909V4.65152C14.878 3.94829 14.5987 3.27387 14.1014 2.77661C13.6042 2.27936 12.9298 2 12.2265 2V2C11.5233 2 10.8489 2.27936 10.3516 2.77661C9.85437 3.27387 9.57501 3.94829 9.57501 4.65152V5.0303"
                stroke="#FF5358"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
              <path
                d="M5.78864 16.3932V18.6659"
                stroke="#FF5358"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
              <path
                d="M14.8795 16.3932V18.6659"
                stroke="#FF5358"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
              <path
                d="M2 11.0909V13.3637C2 14.1674 2.31926 14.9381 2.88756 15.5064C3.45585 16.0747 4.22662 16.394 5.0303 16.394H15.6364C16.44 16.394 17.2108 16.0747 17.7791 15.5064C18.3474 14.9381 18.6667 14.1674 18.6667 13.3637V11.0909H2Z"
                stroke="#FF5358"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
            </svg>
            <p class="font-grey">3</p>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="btn-wrapper">
      <button class="btn-success">
        <p class="font-green font-plus-jakarta">Đã bán thành công</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },

  methods: {
    formatNumber(number) {
      const billion = 1000000000;

      if (number >= billion) {
        const billionValue = number / billion;
        return `${billionValue.toFixed(2)} Tỷ`;
      } else {
        return number.toString();
      }
    },
  },
};
</script>

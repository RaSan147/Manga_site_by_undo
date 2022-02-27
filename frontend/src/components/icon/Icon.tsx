import React from "react";
import cm from "../../utils/classMerger";
import classes from "./icon.module.scss";

const icons = {
  close: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fal"
      data-icon="times"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      className="svg-inline--fa fa-times fa-w-10 fa-3x"
    >
      <path
        fill="currentColor"
        d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
        className=""
      ></path>
    </svg>
  ),
  playSolid: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="play"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="svg-inline--fa fa-play fa-w-14 fa-3x"
    >
      <path
        fill="currentColor"
        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
        className=""
      ></path>
    </svg>
  ),
  bookmarkHollow: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="bookmark"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className="svg-inline--fa fa-bookmark fa-w-12 fa-3x"
    >
      <path
        fill="currentColor"
        d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
        className=""
      ></path>
    </svg>
  ),
  bookmarkSolid: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="bookmark"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className="svg-inline--fa fa-bookmark fa-w-12 fa-3x"
    >
      <path
        fill="currentColor"
        d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
        className=""
      ></path>
    </svg>
  ),
  bulletList: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="list"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="svg-inline--fa fa-list fa-w-16 fa-3x"
    >
      <path
        fill="currentColor"
        d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
        className=""
      ></path>
    </svg>
  ),
  report: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="flag"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="svg-inline--fa fa-flag fa-w-16 fa-3x"
    >
      <path
        fill="currentColor"
        d="M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z"
        className=""
      ></path>
    </svg>
  ),
  share: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="share"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="svg-inline--fa fa-share fa-w-16 fa-3x"
    >
      <path
        fill="currentColor"
        d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"
        className=""
      ></path>
    </svg>
  ),
  external: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="svg-inline--fa fa-external-link-alt fa-w-16 fa-3x"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
        className=""
      ></path>
    </svg>
  ),
  tag: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="tags"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      className="svg-inline--fa fa-tags fa-w-20 fa-3x"
    >
      <path
        fill="currentColor"
        d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"
        className=""
      ></path>
    </svg>
  ),
  arrow: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="arrow-up"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="svg-inline--fa fa-arrow-up fa-w-14 fa-3x"
    >
      <path
        fill="currentColor"
        d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
        className=""
      ></path>
    </svg>
  ),
  home: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fal"
      data-icon="home-alt"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      className="svg-inline--fa fa-home-alt fa-w-18 fa-3x"
    >
      <path
        fill="currentColor"
        d="M541 229.16l-232.85-190a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z"
        className=""
      ></path>
    </svg>
  ),
  homeSolid: (
    <svg
      style={{ transform: "scale(.95)" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M576 256C576 273.6 561.7 287.1 543.1 287.1L511.1 288l.0026 192c0 17.67-14.33 32-32 32h-95.99c-17.67 0-31.1-14.33-31.1-32l.0011-112c0-8.836-7.165-15.1-16-15.1H240c-8.836 0-15.99 7.162-15.99 15.1L224 480c0 17.67-14.33 32-32 32H96.02c-17.67 0-32-14.33-32-32l.0084-192H32C14.22 288 .0002 273.6-.0005 256C-.0009 246.1 3.842 238.1 10.92 231.9l255.1-223.1c6.964-6.098 14.93-7.918 21.08-7.918c7.523 0 15.05 2.637 21.08 7.918l255.1 223.1C572.2 238.1 576 246.1 576 256z" />
    </svg>
  ),
  user: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM224 32c52.94 0 96 43.06 96 96c0 52.93-43.06 96-96 96S128 180.9 128 128C128 75.06 171.1 32 224 32zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM413.3 480H34.66C33.2 480 32 478.8 32 477.3C32 399.4 95.4 336 173.3 336h101.3C352.6 336 416 399.4 416 477.3C416 478.8 414.8 480 413.3 480z" />
    </svg>
  ),
  userSolid: (
    <svg
      style={{ transform: "scaleY(1.03)" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256 288c79.53 0 144-64.47 144-144s-64.47-144-144-144c-79.52 0-144 64.47-144 144S176.5 288 256 288zM351.1 320H160c-88.36 0-160 71.63-160 160c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32C512 391.6 440.4 320 351.1 320z" />
    </svg>
  ),
  yourLibrary: (
    <svg
      role="img"
      height="24"
      width="24"
      className="Svg-sc-1bi12j5-0 hDgDGI collection-icon"
      viewBox="0 0 24 24"
    >
      <path d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z"></path>
    </svg>
  ),
  search: (
    <svg
      role="img"
      height="24"
      width="24"
      className="Svg-sc-1bi12j5-0 hDgDGI search-icon"
      viewBox="0 0 24 24"
    >
      <path d="M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z"></path>
    </svg>
  ),
  settings: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="cog"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="svg-inline--fa fa-cog fa-w-16 fa-3x"
    >
      <path
        fill="currentColor"
        d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
        className=""
      ></path>
    </svg>
  ),
  omniDirectional: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fal"
      data-icon="arrows"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="svg-inline--fa fa-arrows fa-w-16 fa-3x"
    >
      <path
        fill="currentColor"
        d="M337.782 434.704l-73.297 73.782c-4.686 4.686-12.284 4.686-16.971 0l-73.296-73.782c-4.686-4.686-4.686-12.284 0-16.97l7.07-7.07c4.686-4.686 12.284-4.686 16.971 0L239 451.887h1V272H60.113v1l41.224 40.741c4.686 4.686 4.686 12.284 0 16.971l-7.071 7.07c-4.686 4.686-12.284 4.686-16.97 0L3.515 264.485c-4.686-4.686-4.686-12.284 0-16.971l73.782-73.297c4.686-4.686 12.284-4.686 16.971 0l7.071 7.071c4.686 4.686 4.686 12.284 0 16.971L60.113 239v1H240V60.113h-1l-40.741 41.224c-4.686 4.686-12.284 4.686-16.971 0l-7.07-7.071c-4.686-4.686-4.687-12.284 0-16.97l73.297-73.782c4.686-4.686 12.284-4.686 16.971 0l73.297 73.782c4.686 4.686 4.686 12.284 0 16.971l-7.071 7.071c-4.686 4.686-12.284 4.686-16.971 0L273 60.113h-1V240h179.887v-1l-41.224-40.741c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.686 12.284-4.686 16.97 0l73.782 73.297c4.687 4.686 4.686 12.284 0 16.971l-73.782 73.297c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L451.887 273v-1H272v179.887h1l40.741-41.224c4.686-4.686 12.284-4.686 16.971 0l7.07 7.071c4.686 4.685 4.686 12.283 0 16.97z"
        className=""
      ></path>
    </svg>
  ),
  biDirectional: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="arrows-h"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="svg-inline--fa fa-arrows-h fa-w-16 fa-3x"
    >
      <path
        fill="currentColor"
        d="M347.404 142.86c-4.753 4.753-4.675 12.484.173 17.14l73.203 70H91.22l73.203-70c4.849-4.656 4.927-12.387.173-17.14l-19.626-19.626c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L128 388.766c4.686 4.686 12.284 4.686 16.971 0l19.626-19.626c4.753-4.753 4.675-12.484-.173-17.14L91.22 282h329.56l-73.203 70c-4.849 4.656-4.927 12.387-.173 17.14l19.626 19.626c4.686 4.686 12.284 4.686 16.971 0l124.485-124.281c4.686-4.686 4.686-12.284 0-16.971L384 123.234c-4.686-4.686-12.284-4.686-16.971 0l-19.625 19.626z"
        className=""
      ></path>
    </svg>
  ),
  reload: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="redo-alt"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="svg-inline--fa fa-redo-alt fa-w-16 fa-3x"
    >
      <path
        fill="currentColor"
        d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"
        className=""
      ></path>
    </svg>
  ),
  chevron: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="chevron-right"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 512"
      className="svg-inline--fa fa-chevron-right fa-w-8 fa-3x"
    >
      <path
        fill="currentColor"
        d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
        className=""
      ></path>
    </svg>
  ),
  arrowWall: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="arrow-to-right"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="svg-inline--fa fa-arrow-to-right fa-w-14 fa-3x"
    >
      <path
        fill="currentColor"
        d="M200.1 99.5l148.4 148c4.7 4.7 4.7 12.3 0 17l-148.4 148c-4.7 4.7-12.3 4.7-17 0l-19.6-19.6c-4.8-4.8-4.7-12.5.2-17.1l97.1-93.7H12c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h248.8l-97.1-93.7c-4.8-4.7-4.9-12.4-.2-17.1l19.6-19.6c4.7-4.9 12.3-4.9 17-.2zM396 76v360c0 6.6 5.4 12 12 12h28c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12h-28c-6.6 0-12 5.4-12 12z"
        className=""
      ></path>
    </svg>
  ),
  bolt: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z" />
    </svg>
  ),
  offline: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      data-prefix="far"
      data-icon="wifi-slash"
      role="img"
      viewBox="0 0 640 512"
      className="svg-inline--fa fa-wifi-slash fa-w-20 fa-7x"
    >
      <path
        fill="currentColor"
        d="M36 3.51C29.1-2.01 19.03-.9 13.51 6l-10 12.49C-2.02 25.39-.9 35.46 6 40.98l598 467.51c6.9 5.52 16.96 4.4 22.49-2.49l10-12.49c5.53-6.9 4.41-16.97-2.49-22.49L36 3.51zm467.18 304.31c1.77-.6 3.67-.83 5.05-2.29l16.46-17.37c4.62-4.87 4.38-12.64-.58-17.15-47.67-43.38-105.71-68.61-165.55-76.26l144.62 113.07zm100.09-118.96c4.8 4.39 12.29 4.13 16.81-.54l16.6-17.19c4.65-4.81 4.37-12.43-.57-16.95C509.51 38.38 333.7 5.4 178.62 54.08l46.71 36.52c130.7-29.93 273.12 2.51 377.94 98.26zM3.89 154.18c-4.94 4.52-5.22 12.14-.57 16.95l16.6 17.19c4.52 4.68 12.01 4.93 16.81.54 12.72-11.62 26.16-21.97 39.9-31.74L37.34 126.4c-11.47 8.69-22.66 17.91-33.45 27.78zm112 116.83c-4.96 4.52-5.2 12.28-.58 17.15l16.46 17.37c4.46 4.71 11.81 4.95 16.62.6 19.7-17.81 41.53-31.84 64.54-42.46l-41.51-32.45c-19.55 11.03-38.28 24.09-55.53 39.79zM240 400c0 44.18 35.82 80 80 80 41.03 0 74.45-31 79.07-70.79l-107.24-83.84C261.6 336.79 240 365.77 240 400zm80-32c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.36-32-32 14.36-32 32-32z"
      />
    </svg>
  ),
  burger: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      data-prefix="far"
      data-icon="bars"
      role="img"
      viewBox="0 0 448 512"
      className="svg-inline--fa fa-bars fa-w-14 fa-7x"
    >
      <path
        fill="currentColor"
        d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
        className=""
      />
    </svg>
  ),
  check: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
    </svg>
  ),
};

type Props = {
  icon: keyof typeof icons;
  orientation?: string;
  scale?: number;
} & React.ComponentProps<"div">;

export default function Icon(props: Props) {
  const { icon, orientation, ...compProps } = props;
  return (
    <>
      <div
        {...props}
        className={cm(classes.icon, "icon")}
        style={{
          transform: `rotateZ(${orientation})`,
          ...(compProps.style ?? {}),
        }}
      >
        {icons[icon]}
      </div>
    </>
  );
}

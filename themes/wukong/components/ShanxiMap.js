import React, { useState } from 'react';
import Link from 'next/link'; // 引入 Link 组件

const districtData = {
  "大同市": ["云冈石窟", "悬空寺","善化寺", "觉山寺"],
  "朔州市":["崇福寺","应县木塔","佛光寺"],
  "忻州市":["佛光寺","南禅寺","南山寺"],
  "晋中市":["双林寺","镇国寺","崇庆寺"],
  "长治市":["崇庆寺","观音堂",""],
  "临汾市":["小西天","广胜寺","铁佛寺"],
  "晋城市":["铁佛寺","玉皇庙","西溪二仙庙","青莲寺"],
  "运城市":["福胜寺","鹳雀楼","永乐宫","广仁王庙","关帝庙","秋风楼&飞云楼"]
};


const ShanxiMap = () => {
  const [hoveredId, setHoveredId] = useState(null); // 用于存储当前悬停的 id

  const handleMouseEnter = (id) => {
    setHoveredId(id); // 设置悬停的 id
  };

  const handleMouseLeave = () => {
    setHoveredId(null); // 清除悬停的 id
  };

  return (
    <div className="flex justify-start overflow-hidden relative">
      {/* <svg
  xmlns="http://www.w3.org/2000/svg"
  pointer-events="none"
  className="leaflet-zoom-animated"
  width="1280"
  height="697"
  viewBox="-107 -58 1280 697"
  style={{ transform: 'translate3d(-107px, -58px, 0)' }} // 注意这里的引号
>
        <g> */}
        <svg
 xmlns="http://www.w3.org/2000/svg"
 preserveAspectRatio="xMidYMid meet" 
 pointer-events="none"
 className="leaflet-zoom-animated"
 width="300"
 height="697"
 viewBox="100 -58 1280 697"
 style={{ transform: 'translate3d(-20px, -150px, 0)' }} // 注意这里的引号
>
    <g id="g" width="100" height="100" transform="translate(400, -50) scale(3)" >
        <Link href="/exa">
        <path class="leaflet-interactive" stroke="#333" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1,6" fill="#eee" fill-opacity="0.5" fill-rule="evenodd" d="M614 322L607 316L614 307L618 306L616 300L611 305L609 304L601 310L594 311L595 312L593 313L591 313L589 309L588 311L579 307L576 310L576 317L571 317L570 315L566 314L559 314L558 311L551 317L546 319L543 322L543 324L546 329L546 332L554 332L557 335L557 337L561 337L564 341L571 342L573 346L576 348L576 350L579 351L578 352L580 354L578 354L581 356L582 354L583 356L585 356L588 355L588 353L594 352L592 346L596 340L595 338L597 333L601 332L600 328L603 325L610 325L612 323L611 322L613 322z" id="太原市"onMouseEnter={() => handleMouseEnter("太原市")}
            onMouseLeave={handleMouseLeave}
            className={`transition-transform duration-150 transform origin-center ${hoveredId === "太原市" ? 'scale-110' : ''}`}
            style={{ pointerEvents: 'auto' }}
            />
        </Link>
          <path
            class="leaflet-interactive" stroke="#333" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1,6" fill="#eee" fill-opacity="0.5" fill-rule="evenodd" d="M637 241L652 245L655 250L654 259L655 261L659 259L661 264L672 262L674 256L675 257L678 254L675 252L676 248L678 247L679 239L682 233L676 231L674 216L667 216L665 215L666 214L659 212L658 213L657 208L653 207L655 205L655 201L658 204L660 203L661 201L659 197L667 196L667 194L675 193L680 190L680 188L677 185L675 187L672 186L669 182L669 172L666 170L663 163L660 165L658 171L660 173L659 176L655 176L651 180L649 180L647 177L634 188L625 189L622 183L606 188L604 195L599 198L594 194L593 195L594 197L592 198L592 202L594 202L594 206L592 217L594 222L595 223L597 221L603 221L602 220L609 216L608 214L618 213L621 210L624 211L631 216L626 219L626 221L629 223L628 226L630 231L633 234L634 238L637 240z" id="大同市"
            onMouseEnter={() => handleMouseEnter("大同市")}
            onMouseLeave={handleMouseLeave}
            className={`transition-transform duration-150 transform origin-center ${hoveredId === "大同市" ? 'scale-110' : ''}`}
            style={{ pointerEvents: 'auto' }}
          />
          <path class="leaflet-interactive" stroke="#333" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1,6" fill="#eee" fill-opacity="0.5" fill-rule="evenodd" d="M636 295L630 295L617 301L618 305L614 307L607 316L614 322L617 320L618 322L621 319L623 321L624 326L626 326L626 330L633 342L640 344L646 344L651 342L655 343L658 339L655 336L655 332L652 326L650 325L651 323L648 319L648 316L645 315L643 312L638 312L636 309L636 296z" id="阳泉市"
          onMouseEnter={() => handleMouseEnter("阳泉市")}
          onMouseLeave={handleMouseLeave}
          className={`transition-transform duration-150 transform origin-center ${hoveredId === "阳泉市" ? 'scale-110' : ''}`}
          style={{ pointerEvents: 'auto' }}
          />
          <path class="leaflet-interactive" stroke="#333" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1,6" fill="#eee" fill-opacity="0.5" fill-rule="evenodd" d="M565 400L567 405L573 410L575 416L581 419L585 419L588 424L591 423L591 432L588 434L588 437L594 435L599 439L605 440L605 443L617 446L627 445L628 448L630 448L631 446L637 449L641 448L640 439L642 440L641 432L643 431L640 429L643 429L642 426L644 417L643 415L637 413L636 409L638 407L635 405L635 403L632 402L634 400L632 399L633 397L635 397L633 393L628 389L625 383L624 385L621 386L618 385L618 387L611 386L608 389L606 389L605 384L601 382L598 377L595 375L592 378L589 375L587 375L587 379L590 383L588 385L587 384L586 386L580 386L578 383L573 381L568 384L569 388L565 393L565 397z" id="长治市"
          onMouseEnter={() => handleMouseEnter("长治市")}
          onMouseLeave={handleMouseLeave}
          className={`transition-transform duration-150 transform origin-center ${hoveredId === "长治市" ? 'scale-110' : ''}`}
          style={{ pointerEvents: 'auto' }}
          />
          <path class="leaflet-interactive" stroke="#333" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1,6" fill="#eee" fill-opacity="0.5" fill-rule="evenodd" d="M568 479L576 482L578 481L578 483L583 481L591 483L594 480L598 484L603 480L607 481L609 478L610 479L611 474L617 476L619 470L621 469L625 471L624 470L627 469L629 466L633 466L636 458L639 459L637 453L638 451L635 447L631 446L630 448L628 448L627 445L617 446L605 443L605 440L599 439L594 435L589 437L589 440L583 445L576 445L574 443L572 446L575 447L574 449L571 449L567 446L568 452L566 453L567 454L563 459L563 466L564 471L567 473L566 475L568 477z" id="晋城市"
          onMouseEnter={() => handleMouseEnter("晋城市")}
          onMouseLeave={handleMouseLeave}
          className={`transition-transform duration-150 transform origin-center ${hoveredId === "晋城市" ? 'scale-110' : ''}`}
          style={{ pointerEvents: 'auto' }}
          />
          <path class="leaflet-interactive" stroke="#333" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1,6" fill="#eee" fill-opacity="0.5" fill-rule="evenodd" d="M594 194L586 190L579 192L579 195L567 214L562 227L562 231L565 235L561 236L561 239L565 240L569 252L571 250L574 251L575 255L580 261L580 259L585 261L588 258L594 262L601 255L602 256L605 254L607 250L615 245L618 249L628 249L634 246L637 241L634 238L633 234L630 232L628 228L629 223L626 221L626 219L631 216L624 211L621 210L618 213L608 213L609 215L607 218L602 220L603 221L597 221L596 223L594 222L592 217L594 206L592 198L594 198L594 194z" id="朔州市"
          onMouseEnter={() => handleMouseEnter("朔州市")}
          onMouseLeave={handleMouseLeave}
          className={`transition-transform duration-150 transform origin-center ${hoveredId === "朔州市" ? 'scale-110' : ''}`}
          style={{ pointerEvents: 'auto' }}
          />
          <path class="leaflet-interactive" stroke="#333" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1,6" fill="#eee" fill-opacity="0.5" fill-rule="evenodd" d="M635 397L641 394L643 389L645 391L646 389L647 390L645 385L647 382L645 378L646 374L649 373L652 364L662 348L663 343L659 341L647 344L635 343L631 340L628 332L626 331L626 327L624 326L624 323L621 319L618 322L617 320L612 322L610 325L603 325L600 328L601 332L599 332L596 336L596 340L592 346L594 352L588 353L588 355L585 356L583 356L583 354L580 357L578 357L572 367L568 364L566 367L563 368L562 376L560 379L549 384L546 384L544 382L542 383L546 386L539 392L541 395L542 393L543 395L544 394L550 402L550 399L554 398L562 399L564 401L565 393L567 389L569 389L568 384L575 381L580 385L586 386L587 384L590 384L586 376L589 375L592 378L595 375L600 379L601 382L605 384L606 389L608 389L611 386L618 387L618 385L624 385L624 383L628 387L627 389L632 392L635 396z" id="晋中市"
          onMouseEnter={() => handleMouseEnter("晋中市")}
          onMouseLeave={handleMouseLeave}
          className={`transition-transform duration-150 transform origin-center ${hoveredId === "晋中市" ? 'scale-110' : ''}`}
          style={{ pointerEvents: 'auto' }}
          />
          <path class="leaflet-interactive" stroke="#333" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1,6" fill="#eee" fill-opacity="0.5" fill-rule="evenodd" d="M500 454L502 459L501 463L498 466L495 476L491 481L489 494L485 501L486 515L493 517L496 516L498 518L502 516L506 517L508 514L512 516L516 510L518 511L525 508L526 505L530 506L535 504L538 505L546 503L548 499L551 497L550 495L557 493L557 491L559 490L564 490L567 492L567 484L569 482L568 477L566 475L567 473L564 471L563 473L558 472L558 470L557 471L559 466L561 465L558 464L559 461L555 461L553 459L548 458L546 464L539 463L533 465L533 458L536 457L535 455L533 455L532 457L528 454L526 449L524 449L523 452L520 454L519 450L517 453L518 455L516 456L508 453L505 454L506 452L504 451L502 452z" id="运城市"
          onMouseEnter={() => handleMouseEnter("运城市")}
          onMouseLeave={handleMouseLeave}
          className={`transition-transform duration-150 transform origin-center ${hoveredId === "运城市" ? 'scale-110' : ''}`}
          style={{ pointerEvents: 'auto' }}
          />
          <path class="leaflet-interactive" stroke="#333" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1,6" fill="#eee" fill-opacity="0.5" fill-rule="evenodd" d="M562 231L558 230L556 232L543 228L539 231L539 236L536 239L536 242L529 242L525 244L527 245L527 247L528 246L529 249L531 249L526 263L524 265L521 265L519 268L520 276L517 282L517 285L521 287L529 282L532 290L536 290L543 297L544 294L545 295L551 292L552 290L554 291L555 294L553 295L556 299L555 300L558 306L555 308L555 310L557 312L558 311L559 314L561 313L563 315L566 314L570 315L571 317L575 317L577 316L577 312L575 310L578 309L578 307L586 309L588 311L589 310L591 311L591 313L595 312L594 311L599 311L616 300L620 301L630 295L636 295L636 292L638 291L639 287L643 287L643 284L645 284L647 280L649 281L650 278L646 273L646 267L649 266L654 261L655 250L652 246L640 241L637 241L634 246L628 249L618 249L616 245L607 250L605 254L602 256L599 256L594 262L588 258L585 261L580 259L580 261L578 260L579 259L577 256L575 256L574 252L571 250L569 252L565 240L561 239L561 237L565 236L563 232z" id="忻州市"
          onMouseEnter={() => handleMouseEnter("忻州市")}
          onMouseLeave={handleMouseLeave}
          className={`transition-transform duration-150 transform origin-center ${hoveredId === "忻州市" ? 'scale-110' : ''}`}
          style={{ pointerEvents: 'auto' }}
          />
          <path class="leaflet-interactive" stroke="#333" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1,6" fill="#eee" fill-opacity="0.5" fill-rule="evenodd" d="M493 388L491 389L493 390L492 396L494 396L493 397L495 398L492 401L497 406L495 430L500 454L503 451L505 452L505 454L508 453L515 456L518 455L517 453L519 450L520 454L523 452L524 449L526 449L531 457L533 455L535 455L536 457L533 458L533 465L538 463L546 464L547 459L550 458L555 461L559 461L558 464L561 465L559 466L557 471L558 470L558 472L563 473L563 460L567 454L566 453L568 452L567 447L574 449L575 448L574 446L572 446L572 444L574 443L576 445L583 445L589 441L588 435L591 432L591 424L588 424L585 419L581 419L575 416L573 410L567 405L566 400L564 401L562 399L554 398L550 399L550 402L542 393L542 395L539 393L534 396L535 397L530 397L529 393L523 390L523 386L520 388L519 386L518 388L517 387L512 390L504 386L504 388L500 390L494 389z" id="临汾市"
          onMouseEnter={() => handleMouseEnter("临汾市")}
          onMouseLeave={handleMouseLeave}
          className={`transition-transform duration-150 transform origin-center ${hoveredId === "临汾市" ? 'scale-110' : ''}`}
          style={{ pointerEvents: 'auto' }}
          />
          <path class="leaflet-interactive" stroke="#333" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1,6" fill="#eee" fill-opacity="0.5" fill-rule="evenodd" d="M580 356L578 354L580 354L578 350L576 350L576 348L570 341L562 340L561 337L557 337L557 335L554 333L546 333L545 331L546 330L543 322L557 312L555 310L555 308L558 307L555 300L556 299L553 296L555 294L554 291L552 290L551 292L545 295L544 294L543 297L540 294L540 292L532 290L529 282L521 287L517 285L517 282L514 288L516 295L514 295L514 298L510 299L505 307L501 308L500 313L497 314L498 327L501 329L504 336L509 339L506 341L510 343L510 350L509 355L504 357L503 360L503 362L506 362L506 366L504 366L499 376L494 381L491 382L494 384L493 388L499 390L504 388L504 386L507 386L512 390L517 387L520 388L522 386L524 387L523 390L525 392L528 391L530 397L535 397L534 396L536 396L539 393L539 391L546 387L542 383L544 382L549 385L554 381L560 379L562 376L563 368L570 364L572 367L577 358L580 357z" id="吕梁市"
          onMouseEnter={() => handleMouseEnter("吕梁市")}
          onMouseLeave={handleMouseLeave}
          className={`transition-transform duration-150 transform origin-center ${hoveredId === "吕梁市" ? 'scale-110' : ''}`}
          style={{ pointerEvents: 'auto' }}
          />
        </g>
      </svg>

      {hoveredId && (
        <div className="absolute top-0 left-0 p-2 bg-white border border-gray-300 rounded">
          <div>当前悬停: {hoveredId}</div>
          <div>景区列表:</div>
          <ul>
            {districtData[hoveredId]?.map((scenicSpot, index) => (
              <li key={index}>{scenicSpot}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};




/*const ShanxiMap = () => {
  return (
    <div className="overflow-hidden">
      <img
        src="/images/山西省.svg" // 从 public 文件夹加载 SVG
        alt="山西省地图"
        className="transition-transform duration-150 hover:scale-110 w-full h-auto" // 添加放大效果
        style={{ pointerEvents: 'auto' }} // 确保可以响应鼠标事件
      />
    </div>
  );
};*/

export default ShanxiMap;

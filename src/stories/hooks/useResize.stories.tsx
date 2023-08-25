import styled from "@emotion/styled";
import { useState } from "react";
import { Image } from "../../components";
import { useResize } from "../../hooks";

export default {
  title: "Hook/useResize",
};

const Background = styled.div`
  width: 100%;
  height: 400px;
  background-color: blue;
`;

type RectType = {
  width: number;
  height: number;
};

export const Default = () => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  // Background의 rect 객체에서 너비와 높이를 추출하고 그에 맞게 이미지의 크기도 업데이트한다.
  const ref = useResize((rect: RectType) => {
    setImageSize({ width: rect.width, height: rect.height });
  });
  return (
    <Background ref={ref}>
      <Image
        width={imageSize.width}
        height={imageSize.height}
        src="https://picsum.photos/1000"
        mode="contain"
      />
    </Background>
  );
};

import React, { useContext } from "react";
import Button from "../../../components/button/Button";
import Icon from "../../../components/icon/Icon";
import cm from "../../../utils/classMerger";
import { ReaderContext } from "../Reader";
import classes from "./desktopChapterIndicator.module.scss";

export default function DesktopChapterIndicator({
  shift,
  shownItems,
}: {
  shift: boolean;
  shownItems: number;
}) {
  const { jumpChapter, desktopControlsVisible, currentChapter, chapters } =
    useContext(ReaderContext);

  return (
    <>
      <div
        className={classes.pusher}
        style={
          {
            "--paddingBottom": `calc(100% / ${shownItems})`,
          } as any
        }>
        <div
          className={cm(
            classes.desktopChapterIndicator,
            shift && classes.desktopChapterIndicatorShifted,
            !shift && !desktopControlsVisible && classes.desktopChapterHidden,
          )}>
          <Button
            disabled={currentChapter?.name === chapters[chapters.length]?.name}
            onClick={() => jumpChapter?.(-1)}
            icon={<Icon icon="chevron" orientation="-.5turn" />}
          />
          <Button disabled className={classes.middleItem}>
            Ch. {currentChapter?.name ?? "?"} / {chapters?.[0]?.name ?? "?"}
          </Button>
          <Button
            disabled={currentChapter?.name === chapters[0]?.name}
            onClick={() => jumpChapter?.(1)}
            icon={<Icon icon="chevron" orientation="" />}
          />
        </div>
      </div>
    </>
  );
}

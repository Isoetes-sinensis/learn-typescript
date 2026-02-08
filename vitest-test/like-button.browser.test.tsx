import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { LikeButton } from "../like-button/src/LikeButton";

test("999 at first.", async () => {
    const { getByRole } = await render(<LikeButton />);
    const button = getByRole("button");
    await expect.element(button).toHaveTextContent(/^999$/);
});

test("1000 after a click.", async () => {
    const { getByRole, container } = await render(<LikeButton />);
    const button = getByRole("button");
    await button.click();
    expect(container).toMatchSnapshot();
})
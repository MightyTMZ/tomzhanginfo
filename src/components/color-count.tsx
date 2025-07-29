interface ColorCountData {
  total_colors_discovered: number;
}

const ColorCount = async () => {
  const res = await fetch(
    "https://thecolorprojectworld-orbitview.pythonanywhere.com/colors/count/",
    {
      next: { revalidate: 3600 }, // cache for 1 hour
    }
  );

  if (!res.ok) {
    return <span>&nbsp;-&nbsp;</span>;
  }

  const data: ColorCountData = await res.json();

  return (
    <span>
      <strong>&nbsp;{data.total_colors_discovered.toLocaleString()}&nbsp;</strong>
    </span>
  );
};

export default ColorCount;

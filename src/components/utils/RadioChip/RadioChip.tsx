import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import * as React from "react";

export default function RadioChip() {
  const [selected, setSelected] = React.useState("");

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center", p: "0.5rem" }}>
      <div>
        <RadioGroup
          name="shoe-sizes"
          aria-labelledby="shoe-sizes"
          orientation="horizontal"
          sx={{ flexWrap: "wrap", gap: 1 }}
        >
          {[
            "US 3.5",
            "US 4",
            "US 4.5",
            "US 5",
            "US 5.5",
            "US 6",
            "US 6.5",
            "US 7",
            "US 7.5",
            "US 8",
            "US 8.5",
            "US 9",
            "US 9.5",
            "US 10",
            "US 10.5",
            "US 11",
            "US 11.5",
            "US 12",
            "US 12.5",
            "US 13",
          ].map((name) => {
            const checked = selected === name;
            return (
              <Chip
                key={name}
                variant="plain"
                color={checked ? "primary" : "neutral"}
                startDecorator={
                  checked && (
                    <CheckIcon sx={{ zIndex: 1, pointerEvents: "none" }} />
                  )
                }
              >
                <Radio
                  variant="outlined"
                  color={checked ? "primary" : "neutral"}
                  disableIcon
                  overlay
                  label={name}
                  value={name}
                  checked={checked}
                  onChange={(event: any) => {
                    if (event.target.checked) {
                      setSelected(name);
                    }
                  }}
                />
              </Chip>
            );
          })}
        </RadioGroup>
      </div>
    </Box>
  );
}

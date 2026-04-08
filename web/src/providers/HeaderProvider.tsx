import React, { useMemo, useState } from "react";

interface HeaderProviderContextProps {
	title: string;
	setTitle: (trtle: string) => void
}

export const HeaderContext = React.createContext<HeaderProviderContextProps>({
	title: "Zai's Corner",
	setTitle: () => { },
});

interface HeaderProviderProps {
	children: React.ReactNode;
}

export function HeaderProvider(props: HeaderProviderProps) {
	const [title, setTitle] = useState("Zai's Corner")

	const state = useMemo<HeaderProviderContextProps>(() => ({
		title: title,
		setTitle: (value) => setTitle(() => value !== "" ? `Zai's Corner - ${value}` : "Zai's Corner")
	}), [title]);

	return (
		<HeaderContext.Provider value={state}>
			{props.children}
		</HeaderContext.Provider>
	);
}

const createListenerOnProfiles = (profRef) => {
    profRef.on("child_added", (snapshot) => {
        return snapshot;
    });
}
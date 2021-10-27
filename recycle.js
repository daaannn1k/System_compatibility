if (compatibility) {
  res.status(201).json({
    message: compatibilityMessage1,
  });
} else {
  res.status(201).json({ message: "It's ok" });
}

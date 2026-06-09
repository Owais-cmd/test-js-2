

export const controller = async (req, res) => {
  // 2. Create a trace for this request
  console.log("Creating trace...")
  thr new Error("CRITICAL: Database connection lost during transaction!");
}
# 🧱 WattWise Foundation: Scalable + Maintainable Architecture

## 🎯 Our Objective: Scalable + Maintainable Foundation

WattWise is designed with a long-term vision. From day one, the project is built to be:

- **Modular** — Code is split by concern (fetching, caching, rendering, logic)
- **Extensible** — New features (like washing machines or custom modes) can be added without major rewrites
- **Performant** — Uses client-side caching, minimal fetches, and lazy logic
- **Testable** — Code is structured in a way that supports testing and debugging
- **Deployable** — Aligned with a serverless-first stack and CI/CD-friendly

---

## ✅ Architecture Status & To-Dos

| Area                          | Status   | Action Needed |
|-------------------------------|----------|----------------|
| **Modular structure**         | ✅ Done  | N/A |
| **Extensibility**             | ✅ Ready | Continue using modular design |
| **Performance (caching)**     | ✅ Done  | Already optimized |
| **Testability**               | ⚠️ Partial | Add logging/test utilities |
| **CI/CD pipeline**            | ❗ Not started | Add GitHub Actions for frontend & Lambda |
| **Lambda service isolation**  | ❗ Pending | Split logic (fetchToday / fetchTomorrow) |
| **Chart logic isolation**     | ⚠️ Planned | Create `chartController.js` |
| **Render logic modularization**| ⚠️ Needed | Move `renderPrices()` to `renderController.js` |
| **Config-driven program logic**| ❗ Missing | Add `options` support to `applicationData.js` |
| **Test harness/debug tooling**| ❗ Optional | Add `testUtils.js` or dev debug flag |

---

## 🧩 Action Suggestions

### 1. `renderController.js`
- Move inline render logic to its own module for clarity and reusability.

### 2. `chartController.js`
- Create a controller for Chart.js that encapsulates all visualization logic.

### 3. Split Lambda logic
- Update backend to support separate endpoints or query-based logic (e.g., `?day=today`).

### 4. CI/CD
- Add GitHub Actions for:
  - Deploying frontend to GitHub Pages
  - Bundling Lambda and deploying to AWS

### 5. Configurable Programs
- Redesign `applicationData.js` to support optional flags like `halfLoad`, `extraDry`.

```js
Eco: {
  totalDuration: 237,
  options: {
    halfLoad: { durationOffset: -20, powerOffset: -30 },
    extraDry: { durationOffset: +15, powerOffset: +50 }
  }
}
```

### 6. Test Utilities (Optional)
- Add a `debug` flag in `constants.js`
- Create `testUtils.js` for simulated data, manual test runners, or mock fetchers


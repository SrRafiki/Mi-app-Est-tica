#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .setup(|app| {
      #[cfg(debug_assertions)]
      {
        // Opcional: puedes dejar el log solo en desarrollo, pero sin plugin
        // Por ahora, lo dejamos sin logging para evitar errores
      }
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use tauri::{AppHandle, Emitter}; // Import the necessary module
use serde_json::json; // Import `json!` macro for easy structuring of data

#[tauri::command]
fn greet(name: &str) -> String {
    let message = format!("Hello, {}! You've been greeted from Rust!", name);
    println!("{}", message); // Print to console
    message // Return the message
}


#[tauri::command]
fn download(app: AppHandle, url: String) {
    println!("Download started for URL: {}", url); // Log when download starts
    app.emit("download-started", &url).unwrap();

    for progress in [1, 15, 50, 80, 100] {
        println!("Download progress: {}%", progress); // Log progress
        app.emit("download-progress", &json!({ "progress": progress })).unwrap();
    }

    println!("Download finished for URL: {}", url); // Log when download finishes
    app.emit("download-finished", &url).unwrap();
}

#[tauri::command]
fn my_custom_command() {
    println!("I was invoked from JavaScript!");
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet, my_custom_command, download])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

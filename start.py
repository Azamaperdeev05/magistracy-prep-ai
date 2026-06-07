import subprocess
import sys
import os
import time


def run_backend():
    print("🚀 Starting backend server (FastAPI)...")
    backend_dir = os.path.join(os.getcwd(), "backend")
    
    # Check common virtual environment locations (macOS/Linux bin/python and Windows Scripts/python.exe)
    venv_options = [
        os.path.join(os.getcwd(), ".venv", "bin", "python"),
        os.path.join(os.getcwd(), "venv", "bin", "python"),
        os.path.join(backend_dir, "venv", "Scripts", "python.exe"),
        os.path.join(backend_dir, ".venv", "Scripts", "python.exe"),
    ]
    
    python_cmd = sys.executable
    for option in venv_options:
        if os.path.exists(option):
            python_cmd = option
            break

    print(f"Using Python: {python_cmd}")
    return subprocess.Popen(
        [python_cmd, "-m", "uvicorn", "main:app", "--reload", "--port", "8000"],
        cwd=backend_dir,
    )


def run_frontend():
    print("🌐 Starting frontend server (Vite)...")
    is_windows = os.name == "nt"
    # shell=True is needed on Windows for npm, but not on macOS/Linux
    return subprocess.Popen(["npm", "run", "dev"], shell=is_windows)


if __name__ == "__main__":
    try:
        frontend_proc = run_frontend()

        print("\n✅ Server is running!")
        print("🔗 Site URL: http://localhost:3000")
        print("\nPress Ctrl+C to stop the server.")

        # Keep the script running
        while True:
            time.sleep(1)
            if frontend_proc.poll() is not None:
                print("Frontend process died. Exiting...")
                break

    except KeyboardInterrupt:
        print("\n🛑 Stopping server...")
    finally:
        if "frontend_proc" in locals():
            frontend_proc.terminate()
        sys.exit(0)


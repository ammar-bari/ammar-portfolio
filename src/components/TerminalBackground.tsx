import { useEffect, useRef } from "react";

const codeSnippets = [
  "import rospy",
  "from geometry_msgs.msg import Twist",
  "def pid_controller(error, kp=1.2, ki=0.01, kd=0.5):",
  "    return kp * error + ki * integral + kd * derivative",
  "rospy.init_node('robot_controller')",
  "pub = rospy.Publisher('/cmd_vel', Twist, queue_size=10)",
  "vel_msg = Twist()",
  "vel_msg.linear.x = 0.5",
  "vel_msg.angular.z = compute_steering()",
  "# Kalman filter state estimation",
  "x_hat = A @ x_hat + B @ u",
  "P = A @ P @ A.T + Q",
  "K = P @ H.T @ inv(H @ P @ H.T + R)",
  "serial.begin(115200);",
  "analogRead(A0);",
  "PWM.set_duty_cycle(pin, duty);",
  "while not rospy.is_shutdown():",
  "    sensor_data = read_lidar()",
  "    obstacles = detect_obstacles(sensor_data)",
  "    path = plan_path(start, goal, obstacles)",
  "# Motor control loop at 100Hz",
  "for i in range(num_joints):",
  "    tau[i] = M[i] @ qddot + C[i] @ qdot + g[i]",
  "tf_listener.lookupTransform('/map', '/base_link')",
  "imu_data = read_imu()",
  "quaternion_to_euler(q.x, q.y, q.z, q.w)",
];

const TerminalBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lines: HTMLDivElement[] = [];
    const numLines = 24;

    for (let i = 0; i < numLines; i++) {
      const line = document.createElement("div");
      line.className = "absolute font-mono text-xs whitespace-nowrap pointer-events-none";
      line.style.color = `hsl(var(--code-ghost) / 0.5)`;
      const startY = Math.random() * 100;
      line.style.top = `${startY}%`;
      line.style.left = `${Math.random() * 100}%`;
      line.style.transform = `rotate(${-5 + Math.random() * 10}deg)`;
      line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];

      // Assign drift animation — alternating up/down
      const duration = 15 + Math.random() * 25; // 15-40s
      const direction = i % 2 === 0 ? "drift-up" : "drift-down";
      line.style.animation = `${direction} ${duration}s ease-in-out infinite`;
      line.style.animationDelay = `${-Math.random() * duration}s`;

      container.appendChild(line);
      lines.push(line);
    }

    return () => {
      lines.forEach((l) => l.remove());
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes drift-up {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-60px); }
        }
        @keyframes drift-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(60px); }
        }
      `}</style>
      <div
        ref={containerRef}
        className="fixed inset-0 overflow-hidden pointer-events-none select-none opacity-25 md:opacity-50"
        aria-hidden="true"
      />
    </>
  );
};

export default TerminalBackground;
